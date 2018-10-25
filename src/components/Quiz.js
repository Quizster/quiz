import React from "react";
import CountDownTimer from "./CountDownTimer";
import Players from "./Players";
import io from "socket.io-client";

let clicks = 0;
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      questions: {},
      players: {},
      username: "",
      message: "",
      messages: []
    };

    this.socket = io("localhost:4000");
    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });
    this.handleAnswer = this.handleAnswer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);

    const addMessage = data => {
      console.log(data);
      let playerScores = Object.assign({}, this.state.players);
      playerScores[data.player] = data.message;
      this.setState({ players: playerScores });
      console.log(this.state.messages);
    };

    this.sendMessage = (key, correct) => {
      this.socket.emit("SEND_MESSAGE", {
        player: this.props.playerName,
        message: correct
      });
      this.setState({ message: "" });
    };
  }

  currentQuiz() {
    let quiz = this.props.quizzes[this.props.counter];
    return quiz;
  }
  //Takes the answer object's key. Checks it against the quiz's correct answer
  handleAnswer(key) {
    //this is just a temporary implementation
    clicks += 1;
    let player = this.state.player;
    let questions = this.state.questions;
    //player id will be decided upon username verification
    if (key === this.currentQuiz().correctAnswer) {
      let editedPlayer = Object.assign(player, {
        id: this.props.playerId,
        name: "placeholder name",
        quizId: 1234,
        questions: {}
      });
      //increment with one question result per quiz
      questions[this.props.counter + 1] = "correct";
      editedPlayer.questions = questions;
      this.setState({ player: editedPlayer, questions: questions });
      console.log(this.state.player);
    } else {
      let editedPlayer = Object.assign(player, {
        id: this.props.playerId,
        name: "placeholder name",
        quizId: 1234,
        questions: {}
      });
      //increment with one question result per quiz
      questions[this.props.counter + 1] = "incorrect";
      editedPlayer.questions = questions;
      this.setState({ player: editedPlayer, questions: questions });
      console.log(this.state.player);
    }
    if (this.clicks >= 4) {
      this.clicks = 0;
      this.props.receiveRoundEnd(this.state.player);
    }

    this.sendMessage(key, key == this.currentQuiz().correctAnswer);
    // if (this.clicks >= 4) {
    //   this.clicks = 0;
    //   this.props.receiveRoundEnd(this.state.player);
    // }
    // this.props.receiveRoundEnd(this.state.player);
  }

  render() {
    let players = Object.getOwnPropertyNames(this.state.players);
    console.log("players " + players);
    console.log("render");
    console.log("123" + Object.getOwnPropertyNames(this.state.players));
    return (
      <section className="quiz">
        {players.map(name => (
          <li>{name}</li>
        ))}
        <CountDownTimer
          roundNum={this.props.counter}
          receiveRoundEnd={this.props.receiveRoundEnd}
        />
        <h1 className="quiz__question">{this.currentQuiz().question}</h1>
        <ul className="quiz__answers">
          {Object.keys(this.currentQuiz().answers).map(key => (
            <li
              className="quiz__answer"
              onClick={() => this.handleAnswer(key)}
              key={key}
            >
              <p className="quiz__answerText">
                {this.currentQuiz().answers[key]}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default Quiz;
