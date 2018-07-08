const mongoose = require('mongoose');
const env = require('./environment/environment');

const key = encodeURIComponent(env.key);
mongoose.Promise = global.Promise;

const mongoUri = `mongodb://afreact:${key}@afreact.documents.azure.com:10255/?ssl=true&replicaSet=globaldb`;

function connect() {
    return mongoose.connect(mongoUri);
}

module.exports = {
    connect,
    mongoose
};
