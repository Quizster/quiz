import React from "react";
import Start from "./Start";
import HostQuiz from "./HostQuiz";
import ClientQuiz from "./ClientQuiz";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quizStart: true,
      clientQuiz: false,
      quizzes: [],
      counter: 0
    };
    this.receiveRoundEnd = this.receiveRoundEnd.bind(this);
    this.verifyUsername = this.verifyUsername.bind(this);
  }
  //Which h1 did the click on? Conditionally render the components through state.

  verifyUsername(user) {
    fetch("api/player/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        data === user
          ? this.setState({ user: data, clientQuiz: true })
          : alert(data);
      });
  }

  receiveRoundEnd(player) {
    //Push the player object to the server
    fetch("api/player/answer", {
      method: "post",
      body: JSON.stringify(player),
      headers: {
        "content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("order post success: ", JSON.stringify(data));
        this.setState({
          response: data,
          counter: this.state.counter + 1
        });
      })
      .catch(error => console.error("Error: ", error));
  }

  componentDidMount() {
    fetch("/api/questions")
      .then(res => res.json())
      .then(body => parseObject(body));
  }

  parseObject(obj) {
    this.setState({ quizzes: Object.values(obj) });
  }

  render() {
    return (
      <main className="mainApp">
        {this.state.quizStart && (
          <Start handleClientHostDecision={this.handleClientHostDecision} />
        )}
        {this.state.hostQuiz && (
          <HostQuiz quizzes={this.state.quizzes} counter={this.state.counter} />
        )}
        {this.state.clientQuiz && (
          <ClientQuiz
            quizCollectionId={this.state.quizCollectionId}
            playerName={this.state.playerName}
            playerId={this.state.playerId}
            quizzes={this.state.quizzes}
            counter={this.state.counter}
            receiveRoundEnd={this.receiveRoundEnd}
          />
        )}
      </main>
    );
  }
}

export default App;
