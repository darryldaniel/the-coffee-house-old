import client from './apollo';
import gql from 'graphql-tag';

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