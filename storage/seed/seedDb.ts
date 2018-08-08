import { MongoClient, Db, Collection } from 'mongodb';

require('now-env');

const seedDb = async (host: string, port: string, username: string, password: string) => {
  let uri: string,
    client: MongoClient,
    products: Collection,
    result: any;

  if (username && password) {
    uri = `mongodb://${username}:${password}@${host}:${port}/`;
  } else {
    uri = `mongodb://${host}:${port}/`;
  }

  try {
    client = await MongoClient.connect(uri, { useNewUrlParser: true });
  } catch (error) {
    console.error(`SEED-DB: Could not connect to MongoDB...`);
    throw error;
  }
  console.error(`SEED-DB: Connected to MongoDB...`);

  products = client.db('the-coffee-house').collection('products');

  result = await addProductToCollection(products, PRODUCTS_SEED[0]);
  result = await addProductToCollection(products, PRODUCTS_SEED[1]);
  result = await addProductToCollection(products, PRODUCTS_SEED[2]);

  process.exit(0);
}

async function addProductToCollection(collection: Collection, product: any): Promise<{}> {
  const result = await collection.findOne({ name: product.name });
  let insertResult;

  if (!result) {
    insertResult = await collection.insertOne(product);
    console.log(`SEED-DB: Added ${product.name}`);
  } else {
    console.log(`SEED-DB: ${product.name} already exists`);
  }
  return result;
}

const PRODUCTS_SEED = [
  {
    name: 'Tanzania Gombe',
    price: 13500,
    quantityInStock: 10
  },
  {
    name: 'Burundi Kibande',
    price: 13500,
    quantityInStock: 12
  },
  {
    name: 'Ethiopian Sidamo',
    price: 12000,
    quantityInStock: 15
  }
];

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;

seedDb(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD);
