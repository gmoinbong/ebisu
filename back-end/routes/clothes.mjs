import express from "express";
import db from "../db/conn.mjs";
import { validationResult } from "express-validator";
import { validateClothes } from "../validation/validation.js";

const router = express.Router()

router.get('/', async (req, res) => {
  let collection = await db.collection("Clothes");
  let results = await collection.find({}).toArray();
  res.send(results).status(200)
})

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
    const collection = await db.collection("Clothes");
    const result = await collection.insertOne(newDocument);
    res.sendStatus(204);
  }
  catch (error) {
    console.error('Error inserting data', error);
    res.sendStatus(500);
  }
});

export default router;