import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    term: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="search-bar-input" className="search-name flex-center">Search</label>
          <input
            type="text"
            className="search-bar-input flex-center"
            placeholder="search"
            value={this.state.term}
            onChange={(event) => {
              this.setState({term: event.target.value})
              console.log(this.state.term)
            }}
          />
        </form>
        <h1>{this.state.term}</h1>
      </div>
    );
  }
}
