import React from "react";

class Player extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li className="player" key={this.props.name}>
        <p className="player__name">{this.props.name}</p>
        <p className="player__score">
          Score:
          {this.props.score}
        </p>
        <img
          className="player__image"
          src={`https://api.adorable.io/avatars/60/${
            this.props.name
          }@adorable.png`}
        />
      </li>
    );
  }
}
export default Player;
