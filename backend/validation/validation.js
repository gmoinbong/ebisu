import { body } from "express-validator";

export const validateClothes = [
  body('name').notEmpty(),
  body('collection'),
  body('category').notEmpty(),
  body('gender').notEmpty(),
  body('color').notEmpty(),
  body('size').notEmpty(),
  body('url').notEmpty(),
  body('price').notEmpty(),
];

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 3 }),
];