import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({term: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = this.state.term;
    this.props.handleFormSubmit(value)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Enter </label>
          <input type="text" onChange={this.handleChange} />
          <button> Search </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;