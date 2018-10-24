import React from "react";

class ClientQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  handleSubmit(event) {
    const player = this.state.playerName;
    alert("Get ready to play: " + player.toUpperCase());
    event.preventDefault();
  }

  submitAnswer() {

    const id = 12345;
    const name = "Tony";
    const answer = 1;

    const playerAnswer = {[id]: {id:[id], name: [name], answer:[answer]}};

    return playerAnswer;

    // TODO: submit player answer to player answer endpoint
    fetch("api/player/answer", {
      method: "post",
      body: JSON.stringify(answer),
      headers: {
        "content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("order post success: ", JSON.stringify(data));
        this.setState({
          response: data
        });
      })
      .catch(error => console.error("Error: ", error));
  }

  render() {
    console.log(this.submitAnswer());
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
export default ClientQuiz;
