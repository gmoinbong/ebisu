import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const connectionString = process.env.ATLAS_URI || '';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client
let conn
let dbProducts

async function connectToMongoDB() {
  try {
    await mongoose.connect(connectionString, options);
    console.log('MongoDB is connected');
  } catch (err) {
    console.error(err);
  }
}

async function connectToMongoClient() {
  try {
    client = new MongoClient(connectionString);
    await client.connect();
    conn = client.db("Products");
    dbProducts = conn;
  } catch (e) {
    console.error(e);
  }
}

async function initialize() {
  await Promise.all([connectToMongoDB(), connectToMongoClient()]);
}

initialize();

export { conn, dbProducts };
export default mongoose.connection;
