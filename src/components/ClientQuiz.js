import React from "react";

class ClientQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      correct: [],
      incorrect: []
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);
  }
  /*{
          id: 1,
          question: "kjsfld;klfksk",
          answers: {
            1: "fsdkl",
            2: "dfadslkdskmskh",
            3: "3424dsla;msda3",
            4: "4324"
          },
          correctAnswer: 3
        } */

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
      </section>
    );
  }
}
export default ClientQuiz;
