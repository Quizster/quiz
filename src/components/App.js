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
    this.parseObject = this.parseObject.bind(this);
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
          quizStart: false,
          playerName: user,
          landingPage: false
        })})
        .then(this.setState({quiz: true}))
        .catch(error => console.error("Error: ", error));
  }

  receiveRoundEnd(player) {
    //Has the timer reached 0?
    console.log(player);
    if (player === "next") {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      console.log("clicked", player);
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
            response: data
          });
        })
        .catch(error => console.error("Error: ", error));
    }
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
    console.log(this.state.playerId);
    return (
      <main className="mainApp">
        {this.state.landingPage && (
          <LandingPage verifyUsername={this.verifyUsername} />
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
