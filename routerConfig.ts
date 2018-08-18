import * as Router from 'koa-router';
import * as Koa from 'koa';
import * as passport from 'koa-passport';

export const createAndConfigureRouter = (app: Koa) => {
  const router = new Router();

  router.get('/', async ctx => {
    await ctx.render('index.html');
  });

  router.post('/login', (ctx, next) => {
    const authenticateUser = passport.authenticate(
      'local',
      (error, user, info, status) => {
        ctx.body = info;

        if (user) {
          return ctx.login(user);
        } else {
          ctx.throw(401);
        }
      }
    );

    authenticateUser(ctx, next);
  });

  app.use(router.routes());
};
