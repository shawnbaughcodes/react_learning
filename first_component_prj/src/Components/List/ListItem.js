import React from "react";
class ListItem extends React.Component{
    render(){
        return <li>{this.props.user}</li>
    }
}
export default ListItem;
