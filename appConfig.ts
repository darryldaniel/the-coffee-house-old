import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as serve from 'koa-static';
import * as views from 'koa-views';

import * as path from 'path';

export const createAndConfigureApp = () => {
  const app = new Koa();

  app.use(bodyParser());
  app.use(serve(path.join(__dirname, '/client')))
  app.use(views(path.join(__dirname, '/client')));
  
  return app;
}
