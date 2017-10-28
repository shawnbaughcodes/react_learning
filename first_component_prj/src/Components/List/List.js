import React from 'react';
import Style from "./List.css";
class List extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        let userList = this.props.users.map((user, index) => {
            return <li>{user}</li>
        })
        return (
            <div>
                <h1>The List Component</h1>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}
export default List;
