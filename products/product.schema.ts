import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Product {
  id: Int!
  name: String!
  price: Int!
  quantityInStock: Int!
}

type Query {
  products: [Product]
}
`;

const resolvers = {
  Query: {
    products: () => {
      return dummyProducts;
    }
  }
};

const dummyProducts = [
  {
    id: 1,
    name: 'Equador Single Origin',
    price: 8900,
    quantityInStock: 7
  },
  {
    id: 2,
    name: 'Mixed Origin',
    price: 6900,
    quantityInStock: 9
  }
];

export const productSchema = makeExecutableSchema({ typeDefs, resolvers });
