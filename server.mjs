import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
const url = 'mongodb+srv://admin:qwertyuiop@ebisuclaster.75e7got.mongodb.net/';


const app = express();
const port = 5172;
app.use(cors({ origin: 'http://localhost:5173' }));

MongoClient.connect(url)
  .then((client) => {
    const db = client.db('ebisu');
    const collection = db.collection('Books');

    app.get('/api/book', (req, res) => {
      collection.find({}, { projection: { _id: 0, title: 1 } })
        .toArray()
        .then((documents) => {
          res.json(documents);
        })
        .catch((error) => {
          console.error('Ошибка при получении документа из MongoDB:', error);
          res.status(500).json({ error: 'Ошибка сервера' });
        });
    });

    app.listen(port, () => {
      console.log(`Сервер запущен на порту ${port}`);
    });
  })

  .catch((error) => {
    console.error('Ошибка подключения к MongoDB:', error);
  });
