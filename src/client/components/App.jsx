
import React from "react";
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      list: [],
      term: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({term: e.target.value})
  }

  render () {
    return (
      <div>
        < SearchBar handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default hot(App);
