import React from "react";

class Players extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("1111111" + this.props.playerName);
    return <div>{this.props.playerName}</div>;
  }
  w;
}

export default Players;
