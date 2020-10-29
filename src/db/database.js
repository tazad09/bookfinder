const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book-finder-mvp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "cannot connect to MongoDB"));
db.once("open", function () {
  console.log("connected to MongoDB");
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