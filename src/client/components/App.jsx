
import React from "react";
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import API_KEY from '../../../config.js';
import SearchBar from './SearchBar';
import BookList from './BookList';
import styles from './index.css';
import { Redirect } from "react-router-dom";


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      list: [],
      saved: [],
      redirect: null
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
  saveBook(id, author, title, image, link, description) {
    return axios.post('/save', {id:id, author:author, title:title, image:image, link:link,description:description})
    .then(() => alert('Saved!'))
    .catch(err => console.log(err))
  }

  //get the list of the books from api
  handleSearch (term) {
    let url =  'https://www.googleapis.com/books/v1/volumes?q='+term;
    axios.get(url)
    .then(({data}) => this.setState({list: data.items}))
    .catch((er) => {
      alert('Nothing to show')
      window.location.reload(false);
    })
  }

  deleteBook (id) {
    return axios.delete('/delete', {data:{id:id}})
    .then(this.getBooks)
    .catch((err) => console.log(err))
  }

  render () {
    return (
      <div id='wrapper'>
        <h2> Find a Book</h2>
        <div id="content">
          < SearchBar handleFormSubmit={this.handleSearch}/>
        </div>
        <div id="books">
          < BookList
            books={this.state.list}
            handleSave={this.saveBook}
            bookList={this.state.saved}
            getBooks={this.getBooks}
            deleteBook={this.deleteBook}
          />
        </div>
      </div>
    )
  }
}

export default hot(App);
