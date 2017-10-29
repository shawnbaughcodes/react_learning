import React from 'react';
import "./Nested.css";
import Home from "../Home/Home.js"
import {Link} from 'react-router-dom'
class Nested extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <Home/>
                <h1>Nested Component</h1>
            </div>
        )
    }
}
export default Nested;
