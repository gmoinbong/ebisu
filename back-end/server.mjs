import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs'
import clothesRoutes from './routes/clothes.mjs'

const app = express();
const port = process.env.PORT || 5172;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

//routes
app.use('/api/Clothes', clothesRoutes)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
