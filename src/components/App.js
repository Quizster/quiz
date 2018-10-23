import React from "react";
import "../styles/App.scss";

import Start from "./Start";
import HostQuiz from "./HostQuiz";
import ClientQuiz from "./ClientQuiz";




class App extends React.Component {
  constructor() {
    super();
    this.state = { quizStart: true, hostQuiz: false, clientQuiz: false };
    this.handleClientHostDecision = this.handleClientHostDecision.bind(this);
  }
  //Which h1 did the click on? Conditionally render the components through state.
  handleClientHostDecision(decision) {
    //The 'Start' component will always need to be removed.
    this.setState({ quizStart: false });
    //Must be either host or client for this function to be called.
    decision === "host"
      ? this.setState({ hostQuiz: true })
      : this.setState({ clientQuiz: true });
  }

  componentDidMount() {
    //fetch the questions. Store them in state.
  }

  render() {
    return (

      <main>
        {this.state.quizStart && (
          <Start handleClientHostDecision={this.handleClientHostDecision} />
        )}
        {this.state.hostQuiz && <HostQuiz />}
        {this.state.clientQuiz && <ClientQuiz />}
      </main>
    );

  }
}

export default App;
