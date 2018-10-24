import React from "react";

class HostQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
      counter: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  currentQuiz() {
    let quiz = this.props.quizzes[this.props.counter];
    return quiz;
  }

  render() {
    //Questions will be passed down as props.
    if (this.props.counter === this.state.counter + 1) {
      this.setState({ counter: this.props.counter });
      this.startTimer();
    }
    return (
      <section>
        <h2>timer: {this.state.time}</h2>
        <h1>{this.currentQuiz().question}</h1>
        <ul>
          {this.currentQuiz().map(quiz =>
            Object.keys(quiz.answers).map(key => <li>{quiz.answers[key]}</li>)
          )}
        </ul>
      </section>
    );
  }
}
export default HostQuiz;
