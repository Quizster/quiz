import React from "react";

class Results extends React.Component {
  constructor() {
    super();
    this.state = { topPlayers: null };
  }

  componentDidMount() {
    let players = Object.keys(this.props.playerAnswers).map(key =>
      Object.assign(
        {},
        {
          [key]: Object.values(this.props.playerAnswers[key]).reduce(
            (acc, curr) => {
              if (curr === true) {
                acc += 1;
              }
              return acc;
            },
            0
          )
        }
      )
    );
    console.log(players);
    players.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);
    let inOrder = players.reverse();
    let topFive = inOrder.slice(0, 6);
    this.setState({ topPlayers: topFive });
  }

  render() {
    console.log(this.state.topPlayers);
    return (
      <main>
        {this.state.topPlayers ? (
          <section>
            <h1>TOP 5</h1>
            <ol>
              {this.state.topPlayers.map(player => (
                <li key={Object.keys(player)[0]}>
                  {Object.keys(player)[0]} {Object.values(player)[0]}
                </li>
              ))}
            </ol>
          </section>
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    );
  }
}
export default Results;
