import express from "express";
import db from "../db/conn.mjs";

// const router = express.Router();

//change db name to 'db'

router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// export default router;
