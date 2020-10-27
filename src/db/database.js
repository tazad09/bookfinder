const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books', ()=> {
  console.log('Connected to mongoose')
})


const bookSchema = mongoosel.Schema({

});


let Book = mongoose.model('Book', bookSchema);

const saveBook = (book) => {

};


const deleteBook = () => {


};

module.exports = {
  saveBook,
  deleteBook
}