var mongoose = require('mongoose');
var dbHost = process.env.DB_HOST || '127.0.0.1:27017';
var dbName = process.env.DB_NAME || 'MVP';

mongoose.connect(`mongodb://${dbHost}/${dbName}`, { useNewUrlParser: true })
  .then(()=> {console.log('Connected to the db')})
  .catch(error => handleError(error));

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