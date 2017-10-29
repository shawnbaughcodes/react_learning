import React from 'react';
import Style from "./List.css";
import ListItem from "./ListItem";
import ListInput from "./ListInput";
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {users: props.users}
    }
    updateUsers = (newUser) => {
        let newUserArr = this.state.users.slice();
        newUserArr.push(newUser);
        this.setState({
            users: newUserArr
        })
    }
    render(){
        let userList = this.state.users.map((user, index) => {
            return <ListItem key={index} user={user} />
        })
        return (
            <div>
                <h3>User List</h3>
                <ListInput updateUsers={this.updateUsers}/>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}
export default List;
