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

const db = mongoose.connection;
export default db;
