import { body, validationResult } from "express-validator";

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
