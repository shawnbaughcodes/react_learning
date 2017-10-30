import React from 'react';
import "./Home.css";
import Params from "../Params/Params.js";
import Nested from "../Nested/Nested.js";
import {Link} from 'react-router-dom'
class Home extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="nav-bar">
                <ul id='myNav'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/params/Bansky">Params</Link>
                    </li>
                    <li>
                        <Link to="/nested">Nested</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Home;
