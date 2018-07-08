const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    employees: [{ type: Schema.Types.ObjectId, default: [] }]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
