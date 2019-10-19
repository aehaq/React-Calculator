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
    operator: null,
    isFinal: false
  }

  // Dev Note: We may need a boolean for whether or not "current" is a final output.
  // This is so that, after clicking equals, if the user begins to type a new number, the current will be overwritten instead of appended to.

  // Whenever you click a button, the event is handed down from the Buttons component to this state.
  // 
  handleClick = event => {

    let id = event.target.id
    let type = event.target.dataset.type

    console.log(`You clicked the ${id} button`)

    switch (type) {

      case "operator":
      // when operator is clicked 
      this.setState({isFinal: false})
  
        if (this.state.operator === null) {
        // if no firstNum or current operator exists, 
          // set firstNum to be current, 
          let firstNum = this.state.display.current
          // and current becomes empty while history becomes the firstNum, 
          let newDisplay = {
            current: "",
            history: firstNum
          }
          // update state accordingly
          this.setState({
            display: newDisplay,
            firstNum: firstNum
          })
        } else {
        // If firstNum and current operator exists, 
          // run calculation
          this.calc()
        }

        // register the operator which was clicked to state
        this.setState({operator: id});
        break;

      case "number":
      // When a number is clicked

        if (this.state.isFinal) {
          this.clear()
        }
        // append the clicked number to the number currently displayed
        let newNum = this.state.display.current + id;

        // set the state with the new number
        let newDisplay = {
          current: newNum,
          history: this.state.display.history
        }
        this.setState({display: newDisplay});
        break;

      case "equals":
      // when equals is clicked

        // Only if a firstnum already exists and a second number has been entered
        if (this.state.firstNum != null && this.state.display.current !== "") {
          this.calc()
        }
        // set operator to null and isfinal to true, so that the user is back to normal when typing a new number
        this.setState({
          operator: null,
          isFinal: true
        })
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
    let newDisplay = {}
    let solution;
    let firstNum = parseInt(this.state.firstNum);
    let secondNum = parseInt(this.state.display.current);

    switch (this.state.operator) {
      case "+":
        // add firstNum and secondNum
        solution = firstNum + secondNum;
        newDisplay = {
          current: solution.toString(),
          history: null
        }

        // reset state values
        this.clear()
        // display solution
        this.setState({
          display: newDisplay,
        })
        break;
      case "-":
        // subtract secondNum from firstNum
        solution = firstNum - secondNum;
        newDisplay = {
          current: solution.toString(),
          history: null
        }

        // reset state values
        this.clear()
        // display solution
        this.setState({
          display: newDisplay,
        })
        break;
      case "x":
          // multiply firstNum and secondNum
          solution = firstNum * secondNum
          newDisplay = {
            current: solution.toString(),
            history: null
          }
  
          // reset state values
          this.clear()
          // display solution
          this.setState({
            display: newDisplay,
          })
          break;
      case "/":
        // divide firstNum by secondNum
        solution = firstNum / secondNum
        newDisplay = {
          current: solution.toString(),
          history: null
        }

        // reset state values
        this.clear()
        // display solution
        this.setState({
          display: newDisplay,
        })
        break;
      case "^":
        // firstNum to the power of secondNum
        solution = Math.pow(firstNum, secondNum)
        newDisplay = {
          current: solution.toString(),
          history: null
        }

        // reset state values
        this.clear()
        // display solution
        this.setState({
          display: newDisplay,
        })
        break;
      default:
        break;
    }
    console.log("complete")
  }

  // This sets the default state.
  // Dev note: If we use a contsructor, we can make code DRY by saving default state as a value onMount.
  clear() {
    let defaultDisplay = {
      current: "",
      history: null
    }
    
    this.setState({
      display: defaultDisplay,
      firstNum: null,
      operator: null,
      isFinal: false
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
