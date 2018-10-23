import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  handleSubmit(event) {
    const player = this.state.playerName;
    alert("Get ready to play: " + player.toUpperCase());
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={this.state.playerName}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
