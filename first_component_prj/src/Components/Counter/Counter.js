import React from 'react';
import Style from "./Counter.css";
class Counter extends React.Component{
    constructor(props) {
        super(props)
        this.number = 0
        this.state = {number: 0}
        this.state.button = {button: "blue"}
    }
    handleClick() {
        this.setState({number: 0});
        this.number+=1
        if (this.number >= 15) {
            this.setState({button: "red"});
        }
    }

    render(){
        return(
            <div>
                <h1>Hello, {this.props.first_name}</h1>
                <p>You clicked me {this.number} times!</p>
                <button className="blue" onClick={() => this.handleClick()}>Click Here</button>
            </div>
        )
    }
}
export default Counter;
