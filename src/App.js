import React, { Component } from 'react';
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends Component {

  state = {
    display: {
      current: 0,
      history: null,
    },
    firstNum: null,
    secondNum: null,
    operator: null
  }

  handleClick = event => {
    console.log(`You clicked a button with a value of ${event.target.id}`)
    let id = event.target.id
    switch (id) {
      case "+":
        this.setState({operator: id});
        console.log(this.state)
        break;
    
      default:
        break;
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card text-center">
              <h1 className="card-header"> Calculator </h1>
              <Display display={this.state.display}/>
              <Buttons handleClick={this.handleClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
