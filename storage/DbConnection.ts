import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

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

  public async insertProduct(product: any): Promise<InsertOneWriteOpResult> {
    const count = await this.getProductsCollection().estimatedDocumentCount();

    product.productId = count + 1;

    return this.getProductsCollection().insertOne(product);
  }

  private async _connectToDb(url: string, dbName: string): Promise<Db> {
    const client = await MongoClient.connect(url);
    return client.db(dbName);
  }
}

export const dbInstance = new DbConnection();
