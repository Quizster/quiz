import React from "react";
import LandingPage from "./LandingPage";
import Quiz from "./Quiz";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      landingPage: true,
      quiz: false,
      quizzes: [],
      counter: 0,
      playerId: 0,
      playerName: "",
      quizLength: 0
    };
    this.receiveRoundEnd = this.receiveRoundEnd.bind(this);
    this.verifyUsername = this.verifyUsername.bind(this);
  }
  //Which h1 did the click on? Conditionally render the components through state.

  verifyUsername(user) {
    let userObj = { user };
    fetch("api/player/user", {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          playerId: data,
          playerName: user,
          quiz: true,
          landingPage: false
        });
        console.log("Player ID" + data);
      })
      .catch(error => console.error("Error: ", error));
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
      .then(body => {
        this.setState({ quizzes: Object.values(body), quizLength: Object.values(body).length });
      })
      .catch(error => console.error("Error ", error));
  }

  parseObject(obj) {
    this.setState({ quizzes: Object.values(obj) });
  }

  render() {
    return (
      <main className="mainApp">
        {this.state.landingPage && (
          <LandingPage
            handleClientHostDecision={this.handleClientHostDecision}
            verifyUsername={this.verifyUsername}
          />
        )}
        {this.state.hostQuiz && (
          <HostQuiz quizzes={this.state.quizzes} counter={this.state.counter} />
        )}
        {this.state.quiz && (
          <Quiz
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
