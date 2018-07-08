const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    company: { type: Schema.Types.ObjectId, default: null }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
