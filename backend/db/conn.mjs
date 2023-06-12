import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const connectionString = process.env.ATLAS_URI || '';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, options)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error(err);
  });
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

export const dbProducts = conn.db("Products");


const db = mongoose.connection;
export default db;
