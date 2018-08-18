import * as Koa from 'koa';
import * as session from 'koa-session';
import * as passport from 'koa-passport';
import * as bodyParser from 'koa-bodyparser';
import * as serve from 'koa-static';
import * as views from 'koa-views';
import * as webpackMiddleware from 'koa-webpack';

import { setupAuthentication } from './authentication/authenticate';

const config = require('./webpack.dev.js');

import * as path from 'path';
import { addGraphQLToApp } from './api/api.router';

export const createAndConfigureApp = async () => {
  const app = new Koa();

  if (process.env.NODE_ENV === 'development') {
    const middleware = await webpackMiddleware({ config });
    app.use(middleware);
  }

  app.keys = ['super-secret-key'];
  app.use(session(app));

  setupAuthentication();
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(bodyParser());
  app.use(serve(path.join(__dirname, '/dist')));
  app.use(views(path.join(__dirname, '/dist')));

  addGraphQLToApp(app);

  return app;
};
