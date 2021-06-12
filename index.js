const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const expense = require('./routes/expenses');


app.use('/expense', expense);
const port =process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})