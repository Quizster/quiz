import React from "react";
import CountDownTimer from "./CountDownTimer";

let clicks = 0;
class ClientQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      player: {}
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
    //player id will be decided upon username verification
    if (key === this.currentQuiz().correctAnswer) {
      let editedPlayer = Object.assign(
        {},
        {
          id: this.props.playerId,
          name: "placeholder name",
          quizId: 1234,
          questions: {}
        }
      );
      //increment with one question result per quiz
      editedPlayer.questions[this.props.counter + 1] = "correct";
      this.setState({ player: editedPlayer });
    } else {
      let editedPlayer = Object.assign(
        {},
        {
          id: this.props.playerId,
          name: "placeholder name",
          quizId: 1234,
          questions: {}
        }
      );
      editedPlayer.questions[this.props.counter + 1] = "incorrect";
      this.setState({ player: editedPlayer });
    }
    if (this.clicks >= 4) {
      this.clicks = 0;
      this.props.receiveRoundEnd(this.state.player);
    }
  }

  render() {
    return (
      <section>
        <CountDownTimer roundNum={this.props.counter} />
        <h1>{this.currentQuiz().question}</h1>
        <ul>
          {Object.keys(this.currentQuiz().answers).map(key => (
            <li onClick={() => this.handleAnswer(key)} key={key}>
              {this.currentQuiz().answers[key]}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default ClientQuiz;
