import { makeExecutableSchema } from 'graphql-tools';
import { dbInstance } from '../storage/DbConnection';

const typeDefs = `
type Product {
  productId: Int!
  name: String!
  price: Int!
  quantityInStock: Int!
}

input NewProduct {
  name: String!
  price: Int!
  quantityInStock: Int!
}

type AddProductResult {
  success: Boolean!
  message: String
}

type Query {
  products: [Product]
}

type Mutation {
  addProduct(newProduct: NewProduct): AddProductResult
}
`;

const resolvers = {
  Query: {
    products: async () => {
      const products = await dbInstance
        .getProductsCollection()
        .find()
        .toArray();
      return products;
    }
  },
  Mutation: {
    addProduct: async (_: any, { newProduct }: any, state: any) => {
      if (
        !newProduct.name ||
        !newProduct.price ||
        !newProduct.quantityInStock
      ) {
        return {
          success: false,
          message: 'Product not added!'
        };
      }

      const response = await dbInstance.insertProduct(newProduct);

      if (response.result.ok && response.result.ok > 0) {
        return {
          success: true,
          message: 'Product added successfully!'
        };
      } else {
        return {
          success: false,
          message: 'There was a problem adding the product'
        };
      }
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
