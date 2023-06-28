import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs'
import clothesRoutes from './routes/clothes.mjs'

import { loginValidation, registerValidation } from './validation/validation.js';
import checkAuth from './validation/checkAuth.js'
import handleValidationErrors from './validation/handleValidationErrors.js';
import { getMe, login, register } from './controllers/UserController.mjs';

const app = express();
const port = process.env.PORT || 5172;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/Clothes', clothesRoutes)
app.post('/api/login', loginValidation, handleValidationErrors, login);
app.post('/api/register', registerValidation, handleValidationErrors, register);
app.get('/api/me', checkAuth, getMe);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
