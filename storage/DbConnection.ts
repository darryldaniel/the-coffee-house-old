import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

import { NewProduct } from '../products/newProduct.interface';

require('now-env');

class DbConnection {
  private _db: Db;

  constructor() {
    const dbName = 'the-coffee-house';
    let uri: string;

    if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
      uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/the-coffee-house`;
    } else {
      uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/`;
    }

    this._connectToDb(uri, dbName).then(db => (this._db = db));
  }

  public getProductsCollection(): Collection {
    return this._db.collection('products');
  }

  public async insertProduct(product: NewProduct): Promise<InsertOneWriteOpResult> {
    const insertResult = await this.getProductsCollection().insertOne(product);
    return insertResult;
  }

  private async _connectToDb(uri: string, dbName: string): Promise<Db> {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });
    return client.db(dbName);
  }
}

export const dbInstance = new DbConnection();
