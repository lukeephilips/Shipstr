import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">SHIPSTR</span>
          <span className="App-login">Log in</span>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer className="App-footer row">
          <div className="col-sm-4">
            <ul className="site-links">
              <li>Home</li>
              <li>Manage Account</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="site-links">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Collection Statement</li>
            </ul>
          </div>
          <div className="col-sm-4">
            Social stuff
          </div>


        </footer>
      </div>
    );
  }
}

export default App;
