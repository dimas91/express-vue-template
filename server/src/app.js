const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! This is an Express template.');
});

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`,
  });
});

app.get('/test', (req, res) => {
  res.send({
    message: 'You succesfully made a GET request through the API!',
  });
});

const port = process.env.PORT || 8081;
app.listen(port);
console.log(`Server started on port ${port}`);
