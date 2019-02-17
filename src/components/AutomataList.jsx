import React, { Component } from "react";
import "../App.css";
import { calculateNextState } from "../utils/utils";

class AutomataList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProgress: false,
      automata: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
      repeatingAt: null
    };
  }

  reset = () => {
    this.setState({
      inProgress: false,
      automata: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
      repeatingAt: null
    });
  };

  handleCellChange = i => {
    if (this.state.inProgress) return;
    let startState = [...this.state.automata[0]];
    startState[i] = (startState[i] + 1) % 2;
    this.setState({
      automata: [startState]
    });
  };

  startIterations = () => {
    this.setState(
      {
        inProgress: true
      },
      () => {
        this.iterateUntilRepeat();
      }
    );
  };

  iterateUntilRepeat = () => {
    let automata = [...this.state.automata];
    let currentState = automata[automata.length - 1];
    let nextState = calculateNextState(currentState);
    let repeatingAt = this.checkIfRepeatState(nextState);
    automata.push(nextState);
    if (!this.state.inProgress) return;
    this.setState(
      {
        automata: automata,
        repeatingAt: repeatingAt
      },
      () => {
        if (this.state.repeatingAt === null && this.state.inProgress) {
          setTimeout(() => {
            this.iterateUntilRepeat();
          }, 50);
        }
      }
    );
  };

  checkIfRepeatState = state => {
    let nextState = JSON.stringify(state);
    for (let i = 0; i < this.state.automata.length; i++) {
      let previousState = JSON.stringify(this.state.automata[i]);
      if (nextState === previousState) {
        return i;
      }
    }
    return null;
  };

  renderEntireList = () => {
    let { automata } = this.state;
    return automata.map((iteration, iterationIndex) => (
      <div key={iterationIndex} className="iteration">
        {" "}
        {iterationIndex}
        {iteration.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            onClick={() => this.handleCellChange(cellIndex)}
            className={cell ? "cell active" : "cell"}
          />
        ))}
      </div>
    ));
  };

  render() {
    if (this.state.repeatingAt != null) console.log(this.state.repeatingAt);
    return (
      <div className="automata-list">
        <div className="dashboard">
          <div>
            Number of Iterations: <span>{this.state.automata.length}</span>
          </div>
          <button onClick={this.calculateNextIteration}>Next Iteration</button>
          <button onClick={this.startIterations}>Iterate Until Repeat</button>
          <button onClick={this.reset}>Reset</button>
        </div>

        {this.renderEntireList()}
      </div>
    );
  }
}

export default AutomataList;
