// Code to connect global MongoDB server
var mongoose = require('mongoose');
require('dotenv').config();

const client = mongoose.connect(process.env.LOCAL_CONNECTION, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser:true
});

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = client;