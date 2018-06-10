import * as Router from 'koa-router';
import * as Koa from 'koa';

export const createAndConfigureRouter = (app: Koa) => {
  const router = new Router();
  
  router.get('/', async ctx => {
    await ctx.render('index.html');
  });
  
  app.use(router.routes());
};
