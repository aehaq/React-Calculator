import React, { Component } from 'react';
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends Component {

  state = {
    display: {
      current: "",
      history: null,
    },
    firstNum: null,
    secondNum: null,
    operator: null
  }

  // Whenever you click a button, the event is handed down from the Buttons component to this state.
  // 
  handleClick = event => {
    console.log(`You clicked a button with a value of ${event.target.id}`)
    let id = event.target.id
    let type = event.target.dataset.type
    switch (type) {
      case "operator":
        // when operator is clicked 
  
        if (this.state.operator === null) {
        // if no firstNum or current operator exists, 
          // set firstNum to be current, 
          this.setState()
          // and history to be current, 
          // then empty current

          
        } else {
        // If firstNum and current operator exists, 
          // run calculation
          this.calc()
        }

        // New operator is already set
        this.setState({operator: id});
        break;
      case "number":
        let newDisplay = {
          current: this.state.display.current + id
          // history: this.state.display.history
        }
        this.setState({display: newDisplay});
        break;
      case "equals":
        this.calc()
        this.setState({operator: null})
        break;
      case "clear":
        this.clear()
        break;
      default:
        break;
    }
  }

  calc() {
    console.log("calc run")
    switch (this.state.operator) {
      case "+":
        // add firstNum and secondNum
        break;
      case "-":
        // subtract secondNum from firstNum
        break;
      case "/":
        // subtract secondNum from firstNum
        break;
      default:
        break;
    }
    // solution becomes first num
    // operator becomes null
  }

  // This sets the default state.
  // Dev note: If we use a contsructor, we can make code DRY by saving default state as a value onMount.
  clear() {
    this.setState({
      display: {
        current: "",
        history: null,
      },
      firstNum: null,
      secondNum: null,
      operator: null
    })
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
