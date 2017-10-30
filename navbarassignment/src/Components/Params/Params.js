import React, { Component } from 'react';
import './Params.css';
import {Link} from 'react-router-dom'
import Home from "../Home/Home.js";
import {BrowserRouter, Route} from 'react-router-dom'
class App extends Component {
  render() {
      return (
            <div>
                <Home/>
                <h1>Params Component</h1>
                <p><Link to="/params/Barney">Barney</Link></p>
                <p><Link to="/params/Frank">Frank</Link></p>
                <p><Link to="/params/Goose">Goose</Link></p>
                <h1>Params Component | Name: {this.props.match.params.name}</h1>
            </div>
      );
  }
}

export default App;
