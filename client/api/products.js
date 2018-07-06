import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: `${window.location.origin}/api` }),
  cache: new InMemoryCache()
})

const getAllProducts = async () => {
  const response = await client.query({
    query: gql`
        {
          products {
            id
            name
            price
          }
        }
      `
  });

  return response;
};

export {
  getAllProducts
}