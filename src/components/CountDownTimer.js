import React from "react";
import "../styles/Timer.scss";
class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 10 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  //Is the round counter about to increment?
  componentWillReceiveProps(nextProps) {
    if (nextProps.roundNum === this.props.roundNum + 1) {
      console.log("next round!");
      this.startTimer();
    }
  }
  startTimer() {
    console.log(this.state.seconds);
    if (this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds
    });
    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      this.setState({ seconds: 10 });
      this.props.receiveRoundEnd("next");
    }
  }
  render() {
    return <h1 className="count">{this.state.seconds}</h1>;
  }
}
export default CountDownTimer;
