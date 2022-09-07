const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const { getDevPost } = require('@arifszn/blog-js');

app.use(express.static('static'));

app.get('/', (req, res) => {
  getDevPost({
    user: 'arifszn',
  }).then((res) => {
    console.log(res);
  });

  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
