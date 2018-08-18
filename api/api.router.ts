import { mergeSchemas } from 'graphql-tools';
import { ApolloServer } from 'apollo-server-koa';
import * as Koa from 'koa';

import { productSchema } from '../products/product.schema';

const schema = mergeSchemas({
  schemas: [productSchema]
});

export const addGraphQLToApp = (app: Koa) => {
  const graphQlMiddleWare = new ApolloServer({ schema, playground: true });
  graphQlMiddleWare.applyMiddleware({ app, path: '/api' });
}
