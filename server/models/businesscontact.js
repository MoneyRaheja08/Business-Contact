//businesscontact.js Money Raheja 301276615 19/02/2023
let mongoose = require('mongoose');

// create a model class
let Business = mongoose.Schema({
    name: String,
    email: String,
    number: Number
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', Business);