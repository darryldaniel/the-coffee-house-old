import * as Router from 'koa-router';
import * as Koa from 'koa';
import * as passport from 'koa-passport';

import { addApiToRouter } from './api/api.router';

export const createAndConfigureRouter = (app: Koa) => {
  const router = new Router();

  router.get('/', async ctx => {
    await ctx.render('index.html');
  });

  router.post('/login', async (ctx, next) => {
    const authenticateUser = passport.authenticate(
      'local',
      (error, user, info, status) => {
        ctx.body = info;

        if (user) {
          ctx.login(user);
        }
      }
    );

    return authenticateUser(ctx, next);
  });

  addApiToRouter(router);

  app.use(router.routes());
};
