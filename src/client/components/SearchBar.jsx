import React from 'react';

//make this a functional component
class SearchBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <label> Enter </label>
        <input type="text" onChange={this.props.handleChange} />
      </div>
    )
  }
}

export default SearchBar;