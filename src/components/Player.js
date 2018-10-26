import React from "react";

class Player extends React.Component {
  constructor() {
    super();
  }

  render() {
    let scores = this.props.scores;
    return (
      <li>
        <p>
          Score:
          {scores.filter(v => v === true).length}
        </p>
        <p>{this.props.player}</p>
        <img
          src={`https://api.adorable.io/avatars/60/${
            this.props.player
          }@adorable.png`}
        />
      </li>
    );
  }
}
export default Player;
