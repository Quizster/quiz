import React from "react";

class LandingPage extends React.Component {
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
      <section className="start">
        <form className="start__form" onSubmit={this.handleSubmit}>
          <label className="start__label">
            <input
              className="start__label--inputText"
              placeholder="Enter Player Name"
              type="text"
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </label>
          <button className="start__buttonSubmit button--secondary">
            <span className="button__inner">Submit</span>
          </button>
        </form>
      </section>
    );
  }
}
export default LandingPage;
