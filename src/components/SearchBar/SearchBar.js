import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <label htmlFor="search">
            Search
            <input type="text" className="search-bar-input" />
          </label>
        </form>
      </div>
    );
  }
}
