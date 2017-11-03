import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Ocean from './components/Ocean';
import Air from './components/Air';
import Customs from './components/Customs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/ocean" component={Ocean}/>
            <Route path="/air" component={Air}/>
            <Route path="/customs" component={Customs}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
