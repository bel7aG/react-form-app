import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    term: ''
  }
  
  handleInput = (event) => {
    this.setState({
      term: event.target.value
    })
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term);
    this.setState({
      term: ''
    })
  }
  

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            className="search-bar-input flex-center"
            placeholder="search"
            value={this.state.term}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}
