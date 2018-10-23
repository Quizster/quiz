import React from "react";
import "../styles/App.scss";
import Form from "./Form.js";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Hello World
        <Form />
      </div>
    );
  }
}

export default App;
