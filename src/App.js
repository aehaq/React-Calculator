import React, { Component } from 'react';
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends Component {

  render() {
    return (
      <div>
        <h1> Calculator </h1>
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;
