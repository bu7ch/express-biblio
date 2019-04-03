const mongoose = require('mongoose')
const Book = require('../models/book');

// GET book
function getBooks(req, res){
  let query = Book.find({});
  query.exec((err, books) => {
    if(err) res.send(err);
    res.json(books);
  })
}

//POST book to save a new book
function postBook(req, res) {
  let newBook = new Book(req.body);
  newBook.save((err, book) => {
    if(err) res.send(err)
    res.json({msg:"ajout du book avec succès!", book})
  })
}

module.exports = {getBooks, postBook};
