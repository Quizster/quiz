import React from "react";

class Player extends React.Component {
  constructor() {
    super();
  }

  render() {
    let scores = this.props.scores;
    return (
      <li className="player" key={this.props.player}>
        <p className="player__name">{this.props.player}</p>
        <p className="player__score">
          Score: ${scores.filter(v => v === true).length * 1000}
        </p>
        <img
          className="player__image"
          src={`https://api.adorable.io/avatars/60/${
            this.props.player
          }@adorable.png`}
        />
      </li>
    );
  }
}
export default Player;
