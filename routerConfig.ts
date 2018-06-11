import * as Router from "koa-router";
import * as Koa from "koa";
import { addApiToRouter } from "./api/api.router";

export const createAndConfigureRouter = (app: Koa) => {
  const router = new Router();

  router.get("/", async ctx => {
    await ctx.render("index.html");
  });

  router.get("/api", ctx => {
    ctx.body = {
      data: "hello"
    };
  });

  addApiToRouter(router);

  app.use(router.routes());
};
