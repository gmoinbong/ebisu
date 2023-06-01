import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookTitle() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5172/api/book')
      .then((response) => {
        setTitles(response.data.map((document: unknown) => document.title));
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div>
      <h2>Название книги:</h2>
      <ul>
        {titles.map((title, index) => <li key={index}>{title}</li>)}
      </ul>
    </div>
  );
}

export default BookTitle;
