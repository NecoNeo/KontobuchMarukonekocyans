import { Db, MongoClient } from 'mongodb'

export class DBConnection {
  static instance?: DBConnection
  private client?: MongoClient

  constructor() {
    if (!DBConnection.instance) {
      DBConnection.instance = this
      return this
    } else {
      return DBConnection.instance
    }
  }

  async connect() {
    const client = await MongoClient.connect('mongodb://localhost:27017')
    if (client) {
      this.client = client
      console.log('DB connected.')
    } else {
      throw Error('db not connected')
    }
  }

  getDb(): Db {
    if (this.client) {
      return this.client.db('konto-marukos')
    } else {
      throw Error('db not connected')
    }
  }
}
