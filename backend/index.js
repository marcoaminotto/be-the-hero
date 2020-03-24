const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Checking the application');
});

app.listen(3333);