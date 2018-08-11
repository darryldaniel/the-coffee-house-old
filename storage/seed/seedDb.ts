import { MongoClient, Collection } from 'mongodb';
import { NewProduct } from '../../products/newProduct.interface';
import { NewUser } from '../../authentication/newUser.interface';

require('now-env');

const seedDb = async (host: string, port: string, username: string, password: string) => {
  let uri: string,
    client: MongoClient,
    productsCollection: Collection,
    usersCollection: Collection;

  if (username && password) {
    uri = `mongodb://${username}:${password}@${host}:${port}/the-coffee-house`;
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

  usersCollection = client.db('the-coffee-house').collection('users');

  await addUserToCollection(usersCollection, USERS_SEED[0]);
  await addUserToCollection(usersCollection, USERS_SEED[1]);



  productsCollection = client.db('the-coffee-house').collection('products');

  await addProductToCollection(productsCollection, PRODUCTS_SEED[0]);
  await addProductToCollection(productsCollection, PRODUCTS_SEED[1]);
  await addProductToCollection(productsCollection, PRODUCTS_SEED[2]);

  process.exit(0);
}

async function addUserToCollection(collection: Collection, newUser: NewUser): Promise<NewUser> {
  const result = await collection.findOne({ username: newUser.username });

  if (!result) {
    await collection.insertOne(newUser);
    console.log(`SEED-DB: Added ${newUser.username}`);
  } else {
    console.log(`SEED-DB: ${newUser.username} already exists`);
  }
  return result || newUser;
}

async function addProductToCollection(collection: Collection, newProduct: NewProduct): Promise<NewProduct> {
  const result = await collection.findOne({ name: newProduct.name });

  if (!result) {
    await collection.insertOne(newProduct);
    console.log(`SEED-DB: Added ${newProduct.name}`);
  } else {
    console.log(`SEED-DB: ${newProduct.name} already exists`);
  }
  return result || newProduct;
}

const USERS_SEED: Array<NewUser> = [
  {
    username: 'darryl',
    password: 'test',
    firstName: 'Darryl',
    surname: 'Daniel',
    roles: ['admin']
  },
  {
    username: 'candice',
    password: 'test',
    firstName: 'Candice',
    surname: 'Daniel',
    roles: ['customer']
  }
]

const PRODUCTS_SEED: Array<NewProduct> = [
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
