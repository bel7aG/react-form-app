import React, { Component } from 'react'
import unsplash from 'Api/unsplash'
import { SearchBar, ImageList } from '../'

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

    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.images.length === 0 ? <h1 style={{ color: 'red' }}>loading...</h1> : <ImageList images={this.state.images} />}
      </div>
    )
  }
}