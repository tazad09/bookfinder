const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books', ()=> {
  console.log('Connected to mongoose')
})


const bookSchema = new mongoose.Schema({
  id: String,
  author: String,
  title: String
});

let Book = mongoose.model('Book', bookSchema);

const getAllBooks = () => {
  return Book.find({}).exec()
}

const saveBook = (id, author, title) => {
  let doc = {
    id: id,
    author: author,
    title: title
  }
  return Book.create(doc)
};


const deleteBook = (id) => {
  return findByIdAndDelete(id).exec()
};

module.exports = {
  saveBook,
  deleteBook,
  getAllBooks
}