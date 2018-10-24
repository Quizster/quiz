import React from "react";
import Start from "./Start";
import HostQuiz from "./HostQuiz";
import ClientQuiz from "./ClientQuiz";
import "../styles/App.scss";

/*quizzQuestions = [
    
         {
            id: 1,
            question: 'kjfdsgk',
            answers: {
                1: 'fsdkl',
                2: 'dfskh',
                3: '34243',
                4: '4324'
            },
            correctAnswer: 3
        }
    
] */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quizStart: true,
      hostQuiz: false,
      clientQuiz: false,
      quizzes: [],
      counter: 0
    };
    this.handleClientHostDecision = this.handleClientHostDecision.bind(this);
    this.receiveRoundEnd = this.receiveRoundEnd.bind(this);
  }
  //Which h1 did the click on? Conditionally render the components through state.
  handleClientHostDecision(decision) {
    console.log("host");
    //The 'Start' component will always need to be removed.
    this.setState({ quizStart: false });
    //Must be either host or client for this function to be called.
    decision === "host"
      ? this.setState({ hostQuiz: true })
      : this.setState({ clientQuiz: true });
  }

  receiveRoundEnd() {
    //start new round.
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidMount() {
    //   //fetch the questions. Store them in state.
    //   fetch("/quiz/")
    //     .then(res => res.json())
    //     .then(body => this.setState({ quizzes: body }));
    this.setState({
      quizzes: [
        {
          id: 1,
          question: "kjsfld;klfksk",
          answers: {
            1: "fsdkl",
            2: "dfadslkdskmskh",
            3: "3424dsla;msda3",
            4: "4324"
          },
          correctAnswer: 3
        },
        {
          id: 2,
          question: "kjfdsgk",
          answers: {
            1: "fsdkl",
            2: "dfskh",
            3: "34243",
            4: "4dsalkmadsk324"
          },
          correctAnswer: 2
        },
        {
          id: 3,
          question: "kjfdsgk",
          answers: {
            1: "fsdkl",
            2: "dfadsmdslkskh",
            3: "34243",
            4: "4324"
          },
          correctAnswer: 4
        }
      ]
    });
  }

  render() {
    return (
      <main>
        {this.state.quizStart && (
          <Start handleClientHostDecision={this.handleClientHostDecision} />
        )}
        {this.state.hostQuiz && (
          <HostQuiz quizzes={this.state.quizzes} counter={this.state.counter} />
        )}
        {this.state.clientQuiz && (
          <ClientQuiz
            quizzes={this.state.quizzes}
            counter={this.state.counter}
            receiveRoundEnd={this.receiveRoundEnd}
          />
        )}
      </main>
    );
  }
}

export default App;
