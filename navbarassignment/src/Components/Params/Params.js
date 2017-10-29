import React, { Component } from 'react';
import './Params.css';
import Home from "../Home/Home.js"
import {BrowserRouter, Route} from 'react-router-dom'
class App extends Component {
  render() {
      return (
            <div>
                <Home/>
                <h1>Params Component</h1>
            </div>
      );
  }
}

export default App;
