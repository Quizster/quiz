import React from "react";

let clicks = 0;
class ClientQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      correct: [],
      incorrect: [],
      player: {},
      playerName: ""
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
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
          name: this.props.playerName,
          quizId: this.props.quizCollectionId,
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
          name: this.props.playerName,
          quizId: this.props.quizCollectionId,
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
    console.log(this.state.correct);
    console.log(this.state.incorrect);

    return (
      <section className="clientQuiz">
        <h1 className="clientQuiz__question">{this.currentQuiz().question}</h1>
        <ul className="clientQuiz__answers">
          {Object.keys(this.currentQuiz().answers).map(key => (
            <li className="clientQuiz__answer" onClick={() => this.handleAnswer(key)} key={key}>
              <p className="clientQuiz__answerText">{this.currentQuiz().answers[key]}</p> 
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default ClientQuiz;
