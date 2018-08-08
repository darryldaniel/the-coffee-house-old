import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

import { NewProduct } from '../products/newProduct.interface';

require('now-env');

class DbConnection {
  private _db: Db;

  constructor() {
    const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
      dbName = 'the-coffee-house';

    this._connectToDb(url, dbName).then(db => (this._db = db));
  }

  public getProductsCollection(): Collection {
    return this._db.collection('products');
  }

  public async insertProduct(product: NewProduct): Promise<InsertOneWriteOpResult> {
    const insertResult = await this.getProductsCollection().insertOne(product);
    return insertResult;
  }

  private async _connectToDb(url: string, dbName: string): Promise<Db> {
    const client = await MongoClient.connect(url);
    return client.db(dbName);
  }
}

export const dbInstance = new DbConnection();
