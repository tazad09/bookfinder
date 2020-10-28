
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
      author: '',
      url: '',
      title: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (author, title) {
    this.setState({author: author, title:title}, () => console.log(author, title))
  }

  handleSearch (term) {
    let url =  'https://www.googleapis.com/books/v1/volumes?q='+term+'&key='+API_KEY;
    axios.get(url)
    .then(({data}) => this.setState({list: data.items}))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        < SearchBar handleFormSubmit={this.handleSearch}/>
        < BookList books={this.state.list} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default hot(App);
