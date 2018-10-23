import React from "react";
import "../styles/App.scss";
import Mariusz from "/.Mariusz";
import Form from "/.Form";

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
