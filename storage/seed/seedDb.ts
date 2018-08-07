import { MongoClient, Db } from 'mongodb';

require('now-env');

const seedDb = async (host: string, port: string, username: string, password: string) => {
  let uri, client, products, result;

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

  products = client.db('the-coffee-house').collection('products');

  result = await products.findOne({ name: 'Tanzania Gombe' });

  if (!result) {
    products.insertOne({
      name: 'Tanzania Gombe',
      price: 13500,
      quantityInStock: 10
    });
  }

  result = await products.findOne({ name: 'Burundi Kibande' });

  if (!result) {
    products.insertOne({
      name: 'Burundi Kibande',
      price: 13500,
      quantityInStock: 12
    });
  }

  result = await products.findOne({ name: 'Ethiopian Sidamo' });

  if (!result) {
    products.insertOne({
      name: 'Ethiopian Sidamo',
      price: 12000,
      quantityInStock: 15
    });
  }

  process.exit(0);
}

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;

seedDb(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD);
