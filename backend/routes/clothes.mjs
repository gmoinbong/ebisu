import express from "express";
import { dbProducts } from "../db/conn.mjs";
import { validationResult } from "express-validator";
import { validateClothes } from "../validation/validation.js";

const router = express.Router()

router.get('/', async (req, res) => {
  const { gender, search, name, size, color, category } = req.query;
  const query = {};

  if (gender) {
    query.gender = Array.isArray(gender) ? { $in: gender } : gender;
  }
  if (name) {
    query.name = { $regex: name, $options: 'i' };
  }
  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }
  if (size) {
    query.size = Array.isArray(size) ? { $in: size.map(s => s.toLowerCase()) } : { $in: [size.toLowerCase()] };
  }
  if (color) {
    query.color = Array.isArray(color) ? { $in: color } : { $in: [color] };
  }
  if (category) {
    query.category = Array.isArray(category) ? { $in: category } : { $in: [category] };
  }

  try {
    const collection = await dbProducts.collection("Clothes");
    const results = await collection.find(query).toArray();
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});





router.post('/', validateClothes, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, collection, category,
    gender, color, size, url, price } = req.body;
  const newDocument = {
    name, collection, category,
    gender, color, size, url, price
  };

  try {
    const collection = await dbProducts.collection("Clothes");
    const result = await collection.insertOne(newDocument);
    res.sendStatus(204);
  }
  catch (error) {
    console.error('Error inserting data', error);
    res.sendStatus(500);
  }
});

export default router;