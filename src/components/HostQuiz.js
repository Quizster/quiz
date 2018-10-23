import React from "react";

class HostQuiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    //Questions will be passed down as props.
    return (
      <section>
        <p>Working Host!</p>
        <h1>{/*Some question here*/}</h1>
        <ul>{/*Some mapped questions here*/}</ul>
      </section>
    );
  }
}
export default HostQuiz;
