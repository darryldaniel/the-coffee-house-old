import * as Koa from 'koa';

import * as path from 'path';

import { createAndConfigureApp } from './appConfig';
import { createAndConfigureRouter } from './routerConfig';

const PORT = process.env.PORT || 3000;

const startApp = async () => {
  const app: Koa = await createAndConfigureApp();

  createAndConfigureRouter(app);
  
  app.listen(PORT);
  
  console.log(`Server started...`);

  if (process.env.NODE_ENV === 'development') {
    console.log(`Browse to http://localhost:${PORT}`);
  }
}

startApp();