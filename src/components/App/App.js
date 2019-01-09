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
        {this.state.images.length === 0 ? <div className="empty"><h1>Hi</h1></div> : <ImageList images={this.state.images} />}
      </div>
    )
  }
}