import React, { Component } from 'react'
import unsplash from 'Api/unsplash'
import { SearchBar, ListImage } from '../'

export default class App extends Component {
  
  state = {
    images: []
  }
  
  componentDidMount = () => {
    console.log(this)
  }
  
  handleFormSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    })

    console.log(response.data.results)

    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.images.length === 0 ? "ok" : <ListImage images={this.state.images} />}
      </div>
    )
  }
}