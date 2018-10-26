import React from "react";
import LandingPage from "./LandingPage";
import Quiz from "./Quiz";
import Results from "./Results";
import io from "socket.io-client";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      landingPage: true,
      quiz: false,
      resultShow: false,
      quizzes: [],
      counter: 0,
      quizId: 0,
      playerId: 0,
      playerName: "",
      quizLength: 0,
      score: 0,
      players: {}
    };
    this.parseObject = this.parseObject.bind(this);
    this.receiveRoundEnd = this.receiveRoundEnd.bind(this);
    this.verifyUsername = this.verifyUsername.bind(this);
    this.addTenToScore = this.addTenToScore.bind(this);
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
          quizId: 1234,
          playerId: data,
          quizStart: false,
          playerName: user,
          landingPage: false,
          socketId: ""
        });
      })
      .then(this.setState({ quiz: true }))
      .catch(error => console.error("Error: ", error));

    // create connection to socket
    this.socket = io("localhost:4000");

    // send player name to socket
    this.socket.emit("player_joined", user);

    //
    this.socket.on("player_socket", data => {
      this.setState({ socketId: data });
    });

    this.socket.on("connected_players", data => {
      this.setState({ players: data });
    });
  }
  //Just a bit of visual help for the player
  addTenToScore() {
    let score = this.state.score;
    score += 10;
    this.setState({ score: score });
  }

  receiveRoundEnd(player) {
    //Has the timer reached 0?
    if (player === "next") {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      fetch("api/player/answer", {
        method: "post",
        body: JSON.stringify(player),
        headers: {
          "content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            response: data
          });
        })
        .catch(error => console.error("Error: ", error));
    }
  }
  //Have we reached ten rounds? If so show the results!
  receiveAnswersEachRound(answers) {
    this.state.counter > 10
      ? this.setState({ quiz: false, resultShow: true, playerAnswers: answers })
      : null;
  }

  componentDidMount() {
    fetch("/api/questions")
      .then(res => res.json())
      .then(body => {
        this.setState({
          quizzes: Object.values(body),
          quizLength: Object.values(body).length
        });
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
          <LandingPage verifyUsername={this.verifyUsername} />
        )}
        {this.state.quiz && (
          <Quiz
            score={this.state.score}
            addTenToScore={this.addTenToScore}
            quizCollectionId={this.state.quizCollectionId}
            playerName={this.state.playerName}
            playerId={this.state.playerId}
            quizzes={this.state.quizzes}
            counter={this.state.counter}
            receiveAnswersEachRound={this.receiveAnswersEachRound}
            receiveRoundEnd={this.receiveRoundEnd}
            players={this.state.players}
          />
        )}
        {this.state.resultShow && (
          <Results playerAnswers={this.state.playerAnswers} />
        )}
      </main>
    );
  }
}

export default App;
