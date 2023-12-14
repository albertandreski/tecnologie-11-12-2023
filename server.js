const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/fantasy', (req, res) => {
  res.sendFile(__dirname + '/public/fantasy.html');
});

app.get('/thriller', (req, res) => {
  res.sendFile(__dirname + '/public/thriller.html');
});

app.get('/truestory', (req, res) => {
  res.sendFile(__dirname + '/public/truestory.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
