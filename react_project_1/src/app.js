import React from 'react';
import Prop from "./components/prop/prop.js";
let user = {first_name: "Steph", last_name: "Villalobos", age: 30}
class App extends React.Component{
    render(){
        return(
            <Prop user={user}/>
        )
    }
}
export default App;
