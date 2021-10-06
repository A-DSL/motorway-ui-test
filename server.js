'use strict';

//express API
const app = require('express')();
//image source
const images = require('./src/images.json');

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get('/images', ({ query }, res) => {
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;

  setTimeout(() => {
    return res.status(200).json(i);
  }, 10);
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});
