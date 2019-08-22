import React, { Component } from 'react';
import WrapperComponent from './components/WrapperComponent';
import UserComponent from './components/UserComponent'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ["Marcus", "Daja", "Sandra"],
      color: "green",
      user: [""]
    }


  }

  toggleColor = () => {
    this.setState(prevState => ({
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }))
  }
  addUser = () => {
    let usersList = this.state.users.concat(this.state.user);
    this.setState({
      users: usersList
    })
    this.setState({
      user: ""
    })
  }

  removeUser = () => {
    this.state.users.pop();
    this.setState({
      users: this.state.users
    })
  }
  user = (event) => {
    this.setState({ user: event.target.value })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card">
          <WrapperComponent>
            <UserComponent users={this.state.users} color={this.state.color}></UserComponent>
          </WrapperComponent>
        </div>
        <div className="card">
          <WrapperComponent>
            <input type="text" value={this.state.user} onChange={this.user}></input>
            <button type="button" className="btn btn-secondary" onClick={this.addUser}>add</button>
            <button type="button" className="btn btn-secondary" onClick={this.removeUser}>Delete</button>
          </WrapperComponent>
        </div>

      </div>
    )
  }

}
export default App;

