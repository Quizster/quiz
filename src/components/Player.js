import React from "react"; 

class Player extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <li key ={this.props.name}>
                <p>Score:{this.props.score}</p>
                <p>{this.props.name}</p>
                <img src={`https://api.adorable.io/avatars/60/${this.props.name}@adorable.png`}/>
            </li>
        )
    }
}
export default Player;