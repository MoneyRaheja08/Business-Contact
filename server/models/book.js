//book.js Money Raheja 301276615 19/02/2023
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);