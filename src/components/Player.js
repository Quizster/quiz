import React from "react"; 

class Player extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <li>
                <p>this.props.name</p>
                <img src="https://placeholder.pics/svg/150"/>
            </li>
        )
    }
}
export default Player;