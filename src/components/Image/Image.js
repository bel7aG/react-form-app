import React, {Component} from 'react'

export default class Image extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoaded: true
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
  }

  render() {
    const { urls, description } = this.props.image
    const className = this.props.className
    
    if (this.state.isLoaded) {
      return (
        <li className={className}>
          <img ref={this.imageRef} src={urls.regular} alt={description} />
        </li>
      )
    }
    return <h1 style={{color: "#f00"}}>loaded</h1>
  }
}