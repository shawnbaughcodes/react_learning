import React from 'react';
import Child from './Child.js'
import Style from "./Bubble.css";
let user = {first_name: "Bobby", last_name: "Salazar"}
class Parent extends React.Component{
    constructor(props) {
        super(props)
        this.state = user;
    }
    updateUser = () => {console.log("Updating user")}
    render(){
        return(
            <div className="row parent">
                <h1>This is the parent</h1>
                <h3>First Name: {this.state.first_name} | Last Name: {this.state.last_name}</h3>
                <div className="col-sm-6 col-xs-6">
                    <Child user={this.state} />
                </div>
                <div className="col-sm-6 col-xs-6">
                    <Child user={this.state} />
                </div>
            </div>
        )
    }
}
export default Parent;
