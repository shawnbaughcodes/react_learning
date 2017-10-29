import React from 'react';
import "react-router";
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
import Prop from "./Components/Prop/Prop.js";
import Event from "./Components/Event/Event.js";
import State from "./Components/State/State.js";
let user = {first_name: "Steph", last_name: "Villalobos", age: 30}
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">State</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                        <li><Link to="/event">Event</Link></li>
                    </ul>
                    <Route exact path="/" component={State} />
                    <Route path="/prop" component={Prop} />
                    <Route path="/event" component={Event} />
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
