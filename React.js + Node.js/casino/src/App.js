import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <form className="form-signin">
            <h2 className="form-signin-heading"> Sign in </h2>
            <label for="inputEmail" className="sr-only"> Login
            </label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only"> Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
            </button>
            <button className="btn btn-lg btn-primary btn-block" type="button"> Gegistration
            </button>
        </form>
    );
  }
}

export default App;
