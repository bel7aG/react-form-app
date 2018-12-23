import React, { Component } from 'react'

export default class SearchBar extends Component {

  handleInputChange = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <label htmlFor="search-bar-input" className="search-name flex-center">Search</label>
          <input
            type="text"
            className="search-bar-input flex-center"
            placeholder="search"
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
