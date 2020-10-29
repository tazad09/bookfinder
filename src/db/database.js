const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookSchema = new mongoose.Schema({
  id: String,
  author: String,
  title: String,
  image: String,
  link: String,
  description: String
});

let Book = mongoose.model('Book', bookSchema);

const getAllBooks = () => {
  return Book.find({}).exec()
}

const saveBook = (id, author, title, image, link, description) => {
  let doc = {
    id: id,
    author: author,
    title: title,
    image: image,
    link: link,
    description: description
  }
  return Book.create(doc)
};


const deleteBook = (id) => {
  return Book.findOneAndDelete(id).exec()
};

module.exports = {
  saveBook,
  deleteBook,
  getAllBooks
}