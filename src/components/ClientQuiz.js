import React from "react";
import CountDownTimer from "./CountDownTimer";

let clicks = 0;
class ClientQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      player: {},
      questions: {}
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);
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
  }

  render() {
    console.log(this.currentQuiz());
    return (
      <section className="clientQuiz">
        <CountDownTimer
          receiveRoundEnd={this.props.receiveRoundEnd}
          roundNum={this.props.counter}
        />
        <h1 className="clientQuiz__question">{this.currentQuiz().question}</h1>
        <ul className="clientQuiz__answers">
          {Object.keys(this.currentQuiz().answers).map(key => (
            <li
              className="clientQuiz__answer"
              onClick={() => this.handleAnswer(key)}
              key={key}
            >
              <p className="clientQuiz__answerText">
                {this.currentQuiz().answers[key]}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default ClientQuiz;
