import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs'
import clothesRoutes from './routes/clothes.mjs'

import { UserController } from './controllers/index.js';
import { loginValidation, registerValidation } from './validation/validation.js';
import checkAuth from './validation/checkAuth.js'
import handleValidationErrors from './validation/handleValidationErrors.js';

const app = express();
const port = process.env.PORT || 5172;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/Clothes', clothesRoutes)
app.post('/api/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/api/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/api/me', checkAuth, UserController.getMe);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
