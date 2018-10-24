import React from "react";

class ClientQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      correct: [],
      incorrect: [],
      playerName: "",
      playerScore: {
        1234: {
          playerid: 1234,
          name: "Tony",
          quizId: 5678,
          questions: {
            1: true,
            2: false,
            3: true
          }
        }
      }
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
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

    const playerAnswer = { [id]: { id: [id], name: [name], answer: [answer] } };

    return playerAnswer;

    // TODO: submit player answer to player answer endpoint
    fetch("api/player/user", {
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

  componentDidMount() {
    fetch("api/player/user", {
      method: "post",
      body: JSON.stringify({ name: "tony"}),
      headers: {
        "content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Player ID: ", JSON.stringify(data));
      })
      .catch(error => console.error("Error: ", error));
  }

  currentQuiz() {
    let quiz = this.props.quizzes[this.props.counter];
    return quiz;
  }
  //Takes the answer object's key. Checks it against the quiz's correct answer
  handleAnswer(key) {
    if (key === this.currentQuiz().correctAnswer) {
      let correct = this.state.correct;
      correct.push({ key: key, name: "bob" });
      this.setState({ correct: correct });
    } else {
      let incorrect = this.state.incorrect;
      incorrect.push({ key: key, name: "andy" });
      this.setState({ incorrect: incorrect });
    }
    let games = this.state.correct.length + this.state.incorrect.length;
    games >= 4 ? this.props.receiveRoundEnd(this.state.correct) : null;
  }

  render() {
    console.log(this.state.correct);
    console.log(this.state.incorrect);

    return (
      <section>
        <p>Working Client!</p>
        <h1>{this.currentQuiz().question}</h1>
        <ul>
          {Object.keys(this.currentQuiz().answers).map(key => (
            <li onClick={() => this.handleAnswer(key)} key={key}>
              {this.currentQuiz().answers[key]}
            </li>
          ))}
        </ul>
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
export default ClientQuiz;
