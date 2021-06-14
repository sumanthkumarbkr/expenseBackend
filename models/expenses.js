const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Expense = new Schema({
        title: { type: String, required: true },
        amount: { type: String, required: true },
        note: { type: String },
        date: { type: Date }
});

module.exports = mongoose.model('Expense', Expense)