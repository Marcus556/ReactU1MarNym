import React, { Component } from 'react';
import './WrapperComponent.module.css'

class WrapperComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: true
    }
  }

  toggleShowContent = () => {
    if (this.state.showContent === true) {
      this.setState({
        showContent: false
      })
    } else {
      this.setState({
        showContent: true
      })
    }
  }

  renderCards = () => {
    if (this.state.showContent === true) {
      return <div className="card" styleName="card">{this.props.children}</div>
    }
  }


  render() {
    return (
      <div className="container">

        {this.renderCards()}
        <div className="toggleDiv">
          <button onClick={this.toggleShowContent}>Toggle</button>
        </div>
      </div>
    )
  }

}

export default WrapperComponent

