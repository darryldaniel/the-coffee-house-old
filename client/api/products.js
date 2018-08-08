import client from './apollo';
import gql from 'graphql-tag';

const getAllProducts = async () => {
  const response = await client.query({
    query: gql`
      {
        products {
          _id
          name
          price
        }
      }
    `
  });

  return response;
};

const addProduct = async ({ name, price, quantityInStock }) => {
  const response = await client.mutate({
    mutation: gql`
      mutation {
        addProduct(newProduct: { 
          name: "${name}", 
          price: ${price * 100},
          quantityInStock: ${quantityInStock}}) {
          message
          success
        }
      }
    `,
    refetchQueries: [
      {
        query: gql`
          {
            products {
              _id
              name
              price
            }
          }
        `
      }
    ]
  });

  return response;
};

export { getAllProducts, addProduct };
