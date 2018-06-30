import { mergeSchemas } from 'graphql-tools';
import * as Router from 'koa-router';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import * as bodyParser from 'koa-bodyparser';

import { productSchema } from '../products/product.schema';

const schema = mergeSchemas({
  schemas: [productSchema]
});

export const addApiToRouter = (router: Router) => {
  router.post(
    '/api',
    bodyParser(),
    graphqlKoa(ctx => ({ schema: schema, context: ctx }))
  );
  router.get('/api', graphqlKoa(ctx => ({ schema: schema, context: ctx })));

  if (process.env.NODE_ENV === 'development') {
    router.get('/graphiql', graphiqlKoa({ endpointURL: 'graphql' }));
  }
};
