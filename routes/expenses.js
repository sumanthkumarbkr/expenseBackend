const express = require('express');
const router = express.Router();
const expense = require('../contollers/expenses');

router.get('/', (req, res) => expense.get(req, res));

router.post('/', (req, res) => expense.create(req, res));

router.post('/update', (req, res) => expense.update(req, res));

router.delete('/:id', (req, res) => expense.delete(req, res));

module.exports = router;

