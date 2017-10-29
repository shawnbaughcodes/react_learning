import React from 'react';
import Counter from "./Components/Counter/Counter.js";
import List from "./Components/List/List.js";

class App extends React.Component{
    render(){
        let users = ["eddy", "brendan", "goose", "eli", "marcos"];
        return (
            <div className="container">
                <List users={users} loggedIn="goose" />
            </div>
        )
    }
}
export default App;
