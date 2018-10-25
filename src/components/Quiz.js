import React from "react";
import CountDownTimer from "./CountDownTimer";

let clicks = 0;
class Quiz extends React.Component {
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
    let editedPlayer = Object.assign(
      {},
      {
        id: this.props.playerId,
        name: this.props.playerName,
        quizId: 1234,
        questions: {}
      }
    );
    if (key == this.currentQuiz().correctAnswer) {
      //increment with one question result per quiz
      editedPlayer.questions[this.props.counter + 1] = "correct";
    } else {
      editedPlayer.questions[this.props.counter + 1] = "incorrect";
    }

    this.setState(
      { player: editedPlayer },
      this.props.receiveRoundEnd(this.state.player)
    );

    // if (this.clicks >= 4) {
    //   this.clicks = 0;
    //   this.props.receiveRoundEnd(this.state.player);
    // }
    // this.props.receiveRoundEnd(this.state.player);
  }

  render() {
    return (
      <section className="quiz">
        <CountDownTimer roundNum={this.props.counter} />
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
