import React from "react";
import posed from "react-pose";
import "../styles/Timer.scss";
const CountAnimate = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 15, isVisible: true };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    this.startTimer();
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 500);
  }
  //Is the round counter about to increment?
  componentWillReceiveProps(nextProps) {
    if (nextProps.roundNum === this.props.roundNum + 1) {
      console.log("next round!");
      this.toggle();
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

    //this.setState({ isVisible: !this.state.isVisible });

    if (seconds < 5) {
      this.toggle();
    }

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      this.setState({ seconds: 15 });
      this.props.receiveRoundEnd("next");
    }
  }
  render() {
    return (
      <CountAnimate
        className="count"
        pose={this.state.isVisible ? "visible" : "hidden"}
      >
        {this.state.seconds}
      </CountAnimate>
    );
  }
}
export default CountDownTimer;
