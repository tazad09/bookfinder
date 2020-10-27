
import React from "react";
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import API_KEY from '../../../config.js';
import SearchBar from './SearchBar'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      list: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }



  handleSearch (term) {
    let url =  'https://www.googleapis.com/books/v1/volumes?q='+term+'&key='+API_KEY;
    axios.get(url)
    .then(({data}) => console.log(data))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        < SearchBar handleFormSubmit={this.handleSearch}/>
      </div>
    )
  }
}

export default hot(App);
