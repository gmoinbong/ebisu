import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs'
import clothesRoutes from './routes/clothes.mjs'

import { loginValidation, registerValidation } from './validation/validation.js';

import handleValidationErrors from './validation/handleValidationErrors.js';
import { login, register } from './controllers/userController.js';

const app = express();
const port = process.env.PORT || 5172;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/Clothes', clothesRoutes)
// app.use('/api/cart',)
app.post('/api/login', loginValidation, handleValidationErrors, login);
app.post('/api/register', registerValidation, handleValidationErrors, register);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
