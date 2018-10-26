import React from "react";
import CountDownTimer from "./CountDownTimer";
import Players from "./Players";
import Player from "./Player";
import io from "socket.io-client";

let clicks = 0;
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      players: {},
      username: "",
      message: "",
      messages: [],
      answers: [],
      playerAnswers: {}
    };
    //   playerAnswers: {
    //   tony: {
    //     0: true,
    //     1: false,
    //     3: false
    //   },
    //   luke: {
    //     0: true,
    //     1: false
    //   }
    // }

    this.socket = io("localhost:4000");
    this.socket.on("connected_players", data => {
      this.setState({ playerAnswers: data });
    });

    this.handleAnswer = this.handleAnswer.bind(this);
    this.currentQuiz = this.currentQuiz.bind(this);

    const addMessage = data => {
      let playerScores = Object.assign({}, this.state.players);
      playerScores[data.player] = data.message;
      this.setState({ players: playerScores });
    };

    this.sendMessage = (key, correct) => {
      this.socket.emit("send_answer", this.state.answers);

      this.setState({ message: "" });
    };
  }

  componentDidMount() {
    this.sendMessage();
  }

  currentQuiz() {
    let quiz = this.props.quizzes[this.props.counter];
    return quiz;
  }
  //Takes the answer object's key. Checks it against the quiz's correct answer
  handleAnswer(key, event) {
    //this is just a temporary implementation
    clicks += 1;
    let player = this.state.player;
    //player id will be decided upon username verification
    if (parseInt(key) === this.currentQuiz().correctAnswer) {
      let editedPlayer = Object.assign(player, {
        id: this.props.playerId,
        name: "placeholder name",
        result: true
      });
      this.props.addTenToScore();
      this.setState({ player: editedPlayer });

      const playerObj = { [player]: { [this.props.counter]: true } };
      this.socket.emit("submit_answer", {
        playerName: this.props.playerName,
        question: this.props.counter,
        answer: true
      });
    } else {
      let editedPlayer = Object.assign(player, {
        id: this.props.playerId,
        result: false
      });
      this.setState({ player: editedPlayer });

      this.socket.emit("submit_answer", {
        playerName: this.props.playerName,
        question: this.props.counter,
        answer: false
      });
    }

    this.props.receiveRoundEnd(this.state.player);
    this.sendMessage(key, key == this.currentQuiz().correctAnswer);
  }

  render() {
    // let players = Object.getOwnPropertyNames(this.state.players);
    let players = Object.keys(this.props.players);
    let playerObj = this.props.players;
    return (
      <section className="quiz">
        {/* {players.map(name => (
          <Player score={this.props.score} players={this.props.players} name={name} player={Object.keys(players)[0]} scores={players[Object.keys(players)[0]]}/>
        ))} */}
        {Object.keys(playerObj).map(player => (
          <Player
            player={player}
            scores={Object.values(this.props.players[player])}
          />
        ))}
        <CountDownTimer
          roundNum={this.props.counter}
          receiveRoundEnd={this.props.receiveRoundEnd}
        />
        <h1 className="quiz__question">{this.currentQuiz().question}</h1>
        <ul className="quiz__answers">
          {Object.keys(this.currentQuiz().answers).map(key => (
            <li
              className="quiz__answer"
              onClick={event => this.handleAnswer(key, event)}
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
