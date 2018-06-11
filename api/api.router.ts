import { mergeSchemas } from "graphql-tools";
import * as Router from "koa-router";
import { graphiqlKoa, graphqlKoa } from "apollo-server-koa";

import { productSchema } from "../products/product.schema";

const schema = mergeSchemas({
  schemas: [productSchema]
});

export const addApiToRouter = (router: Router) => {
  router.post("/api", graphqlKoa({ schema: schema }));
  router.get("/api", graphqlKoa({ schema: schema }));

  if (process.env.NODE_ENV === "development") {
    router.get("/graphiql", graphiqlKoa({ endpointURL: "graphql" }));
  }
};
