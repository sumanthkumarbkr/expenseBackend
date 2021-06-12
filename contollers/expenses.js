const Expense = require('../models/expenses');

exports.get = function (req, res) {
    Expense.find(req.query).exec(function (err, expense) {
      if (err) {
        res.status(400);
      }
      res.status(200).send(expense)
    });
  }
  
  exports.create= function (req, res) {
    var newExpense = new Expense(req.body);
    newExpense.save(function (err,expense) {
      if (err) {
        res.status(400).send('Unable to save database');
      } else {
        res.status(201).send(expense)
      }
    });
  }

  exports.update= function (req, res) {
    Expense.findOneAndUpdate(req.body._id,req.body).exec(function (err,expense) {
      if (err) {
        res.status(400).send('Unable to update');
      } else {
        res.status(201).send(expense)
      }
    });
  }

  exports.create= function (req, res) {
    Expense.remove(req.query).exec(function (err) {
      if (err) {
        res.status(400).send('Unable to delete');
      } else {
        res.status(201).send("Process is completed");
      }
    });
  }