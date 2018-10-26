import React from "react";

class Results extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.plotScore = this.plotScore.bind(this);
  }

  render() {
    return (
      <section>
        {/*For each player, get name and results.*/}
        {Object.keys(this.props.playerAnswers).map(key => (
          <div>
            <p>{key}</p>
            {Object.values(this.props.playerAnswers[key]).reduce(
              (acc, curr) => {
                if (curr === true) {
                  acc += 1;
                }
                return acc;
              },
              0
            )}
          </div>
        ))}
      </section>
    );
  }
}
export default Results;
