import React, { Component } from 'react';
import styles from './WrapperComponent.module.css';

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
      return <div className="container">{this.props.children}</div>
    }
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {this.renderCards()}
          <hr />
          <button className={styles.toggleButton} onClick={this.toggleShowContent}>Toggle</button>
        </div>
      </div>
    )
  }

}

export default WrapperComponent

