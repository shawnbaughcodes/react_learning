import React from 'react';
import Style from "./Counter.css";
class Counter extends React.Component{
    constructor(props) {
        super(props)
        this.number = 0;
        this.state = {number: this.number};
    }
    componentDidUpdate(nextProps, nextState){
        console.log("Current state:", this.state.number, "Next state:", nextState.number);
        if (nextState.number >= 5 && this.state.number < 5) {
        console.log(document.getElementById("").className)
        }
    }
    handleClick() {
        this.setState({number: this.number});
        this.number+=1;
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.props.first_name}</h1>
                <p>You clicked me {this.number} times!</p>
                <button className="btn btn-primary" onClick={() => this.handleClick()}>Click Here</button>
            </div>
        )
    }
}
export default Counter;
