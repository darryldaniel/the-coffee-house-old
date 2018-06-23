import * as Router from 'koa-router';
import * as Koa from 'koa';
import * as passport from 'koa-passport';

import { addApiToRouter } from './api/api.router';

export const createAndConfigureRouter = (app: Koa) => {
  const router = new Router();

  router.get('/', async ctx => {
    await ctx.render('index.html');
  });

  router.get('/api', ctx => {
    ctx.body = {
      data: 'hello'
    };
  });

  router.post('/login', ctx => {
    ctx.body = {
      data: 'logged in'
    };
  });

  // router.post('/login', async ctx => {
  //   passport.authenticate('local', (error, user, info, status) => {
  //     console.log(`user: ${user}`);
  //     if (user) {
  //       ctx.login(user);
  //       ctx.redirect('/#/');
  //     } else {
  //       ctx.status = 400;
  //       ctx.body = { status: 'Error' };
  //     }
  //   })(ctx, ctx.res);
  // });

  addApiToRouter(router);

  app.use(router.routes());
};
