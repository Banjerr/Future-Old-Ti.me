import React, { Component } from 'react';
import firebase, { auth, provider } from '../../firebase.js';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null 
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  render() {
    return (
      <div className="login">
        <h1>TuneTracker</h1>
        {this.state.user ?
          <button onClick={this.logout}>Log Out</button>                
          :
          <button onClick={this.login}>Log In</button>              
        }
      </div>
    );
  }
}

export default Login;
