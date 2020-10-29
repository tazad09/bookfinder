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
      <div className="ui form">
        <div className="field">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="search book" type="text" onChange={this.handleChange} />
            <button id> Search </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;