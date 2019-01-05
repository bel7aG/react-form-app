import React, { Component } from 'react'
import axios from 'axios'
import { SearchBar } from '../'

export default class App extends Component {
  componentDidMount = () => {
  }
  
  handleFormSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 3f9a2cacd0cb48e872e4d9e5bfa722c5a0e109bf79d968d308a258ef25061462'
      }
    })
    console.log(response.data.results)
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}