import Form from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };

    thishandleChange = this.handleChange.bind(this);
    thishandleSubmit = thishandleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value.toTitleCase() });
  }

  handleSubmit(event) {
    const player = this.state.playerName;
    alert("Get ready to play:" + player);
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
        <inout type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
