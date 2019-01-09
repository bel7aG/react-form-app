import React, {Component} from 'react'
import { Spinner } from '../'

export default class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: true,
      spans: 0
    }
    
    this.imageRef = React.createRef()
  }
  
  componentDidMount() {
    this.setState({
      isLoaded: false
    })
  
    this.imageRef.current.addEventListener('load', () => {
      this.setState({
        isLoaded: true
      })
    })
  }

  renderContent = () => {
    const { urls, description } = this.props.image
    const className = this.props.className
    if (this.state.isLoaded) {
      return (
        <li className={className}>
          <img ref={this.imageRef} src={urls.regular} alt={description} />
        </li>
      )
    }

    return <Spinner style={{ height: this.imageRef.current.clientHeight }}/>
  }
  
  render() {
    return this.renderContent()
  }
  
}    


