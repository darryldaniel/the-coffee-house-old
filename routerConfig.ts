import * as Router from 'koa-router';
import * as Koa from 'koa';
import * as passport from 'koa-passport';

import { addApiToRouter } from './api/api.router';

export const createAndConfigureRouter = (app: Koa) => {
  const router = new Router();

  router.get('/', async ctx => {
    await ctx.render('index.html');
  });

  router.post('/login', (ctx, next) => {
    passport.authenticate('local', (error, user, info, status) => {
      if (user) {
        ctx.body = { success: true, info };
        return ctx.login(user);
      } else {
        ctx.body = { success: false, info };
        ctx.throw(401);
      }
    })(ctx, next);
  });

  addApiToRouter(router);

  app.use(router.routes());
};
