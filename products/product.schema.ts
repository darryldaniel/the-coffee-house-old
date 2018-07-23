import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Product {
  id: Int!
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
    products: () => {
      return dummyProducts;
    }
  },
  Mutation: {
    addProduct: (_: any, { newProduct }: any, state: any) => {
      const newIndex = dummyProducts.length + 1;
      newProduct.id = newIndex;

      if (!newProduct.name || !newProduct.price || !newProduct.quantityInStock) {
        return {
          success: false,
          message: 'Product not added!'
        };  
      }

      dummyProducts.push(newProduct);

      return {
        success: true,
        message: 'Product added successfully!'
      };
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
