import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs'
import clothesRoutes from './routes/clothes.mjs'
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 5172;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded());


// mongoose.connect("mongodb://localhost:27017/auth", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }); () => {
//   console.log("connected to DB")
// }


//routes
app.use('/api/Clothes', clothesRoutes)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
