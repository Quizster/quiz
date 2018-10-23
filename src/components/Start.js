import React from "react";

class Start extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.passUpDecision = this.passUpDecision.bind(this);
  }
  //Selection is passed up through id.
  passUpDecision(event) {
    this.props.handleClientHostDecision(event.target.id);
  }
  render() {
    return (
      <section>
        <h1 onClick={this.passUpDecision} id="host">
          Host
        </h1>
        <h1 onClick={this.passUpDecision} id="client">
          Client
        </h1>
      </section>
    );
  }
}
export default Start;
