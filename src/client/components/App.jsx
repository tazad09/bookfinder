
import React from "react";
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import API_KEY from '../../../config.js';
import SearchBar from './SearchBar';
import BookList from './BookList';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      list: [],
      saved: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  //get the books from the database
  getBooks() {
    axios.get('/list')
    .then(({data}) => this.setState({saved: data}))
    .catch(err => console.log(err))
  }
  //save a book into the database
  saveBook(id, author, title) {
    return axios.post('/save', {id:id, author:author, title:title})
    .then(() => alert('Saved!'))
    .catch(err => console.log(err))
  }

  //get the list of the books from api
  handleSearch (term) {
    let url =  'https://www.googleapis.com/books/v1/volumes?q='+term+'&key='+API_KEY;
    axios.get(url)
    .then(({data}) => this.setState({list: data.items}))
    .catch(err => console.log(err))
  }

  deleteBook (id) {
    return axios.delete('/delete', {data:{id:id}})
    .then(this.getBooks)
    .catch((err) => console.log(err))
  }

  render () {
    return (
      <div>
        < SearchBar handleFormSubmit={this.handleSearch}/>
        < BookList
          books={this.state.list}
          handleSave={this.saveBook}
          bookList={this.state.saved}
          getBooks={this.getBooks}
          deleteBook={this.deleteBook}
        />
      </div>
    )
  }
}

export default hot(App);
