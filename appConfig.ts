import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as serve from 'koa-static';
import * as views from 'koa-views';
import * as webpackMiddleware from 'koa-webpack';
const config = require('./webpack.dev.js');

import * as path from 'path';

export const createAndConfigureApp = async () => {
  const app = new Koa();

  if (process.env.NODE_ENV === 'development') {
    const middleware = await webpackMiddleware({ config });
    app.use(middleware);
  }

  app.use(bodyParser());
  app.use(serve(path.join(__dirname, '/dist')));
  app.use(views(path.join(__dirname, '/dist')));
  
  return app;
}
