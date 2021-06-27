import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numQuestions: 0, 
      numCorrect: 0
    };
  }

  handleClick = (event) => {
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1
    }));

    if(this.isEquationTrue(event.target.name)) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1
      }));
    }
  }

  isEquationTrue = (userInput) => {
    const sum = this.value1 + this.value2 + this.value3;
    return (
      (sum === this.proposedAnswer && userInput === 'true') 
      || (sum !== this.proposedAnswer && userInput === 'false')
    );
  };

  generateRandom() {
    this.value1 = Math.floor(Math.random() * 100);
    this.value2 = Math.floor(Math.random() * 100);
    this.value3 = Math.floor(Math.random() * 100);
    this.proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
  }

  render() {
    this.generateRandom();

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{ `${ this.value1 } + ${ this.value2 } + ${ this.value3 } = ${ this.proposedAnswer }` }</p>
          </div>
          <button name="true" onClick={ (event) => { this.handleClick(event) } }>True</button>
          <button name="false" onClick={ (event) => { this.handleClick(event) } }>False</button>
          <p className="text">
            Your Score: { this.state.numCorrect }/{ this.state.numQuestions }
          </p>
        </div>
      </div>
    );
  }
}

export default App;
