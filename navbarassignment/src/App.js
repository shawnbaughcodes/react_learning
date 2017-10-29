import React, { Component } from 'react';
import './index.css';
import Home from "./Components/Home/Home.js"
import Params from "./Components/Params/Params.js"
import Nested from "./Components/Nested/Nested.js"
import {BrowserRouter, Route} from 'react-router-dom'
class App extends Component {
  render() {
      return (
        <BrowserRouter>
            <div className="App">

              <Route exact path="/" component={Home} />
              <Route exact path="/params" component={Params} />
              <Route exact path="/nested" component={Nested} />
            </div>
        </BrowserRouter>
      );
  }
}

export default App;
