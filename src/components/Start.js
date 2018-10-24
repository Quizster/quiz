import React from "react";

class Start extends React.Component {
  constructor() {
    super();
    this.state = { playerName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const player = this.state.playerName;
    this.props.verifyUsername(player);
  }

  render() {
    return (
      <section>
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
      </section>
    );
  }
}
export default Start;
