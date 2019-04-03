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
//GET /book/:id
function getBook(req, res) {
  Book.findById(req.params.id, (err, book) => {
    if(err) res.send(err)
    res.json(book)
  })
}
//DELETE /book/:id
function deleteBook(req, res) {
  Book.remove({_id: req.params.id}, (err,result) => {
    res.json({msg:"book bien supprimer", result})
  })
}
// PUT /book/:id
function updateBook(req,res) {
  Book.findById({_id: req.params.id}, (err,book) => {
    if(err) res.send(err)
    Object.assign(book,req.body).save((err, book) =>{
      if(err) res.send(err)
      res.json({msg:"Book modifer",book})
    });
  });
}

module.exports = {getBooks, postBook, getBook, deleteBook, updateBook};
