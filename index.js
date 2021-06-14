const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const expense = require('./routes/expenses');
const cors = require('cors')
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.use('/expense', expense);
const port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Example app listening on port 8080!')
})