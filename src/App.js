import React, { Component } from "react";
import "./App.css";
import { calculateNextState } from "./utils/utils";

import AutomataList from "./components/AutomataList";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProgress: false,
      automata: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
      repeatingAt: null
    };
  }

  reset = () => {
    this.setState({
      inProgress: false,
      automata: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
      repeatingAt: null
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

  handleCellChange = i => {
    if (this.state.inProgress) return; //can't change the cells when automation is running
    let startState = [...this.state.automata[0]];
    startState[i] = (startState[i] + 1) % 2;
    this.setState({
      automata: [startState]
    });
  };

  iterateUntilRepeat = () => {
    let automata = [...this.state.automata];
    let currentState = automata[0];
    let nextState = calculateNextState(currentState);
    let repeatingAt = this.checkIfRepeatState(nextState);
    automata.unshift(nextState);
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
        return this.state.automata.length - i;
      }
    }
    return null;
  };

  render() {
    if (this.state.repeatingAt != null) console.log(this.state.repeatingAt);
    return (
      <div className="App">
        <Dashboard reset={this.reset} startIterations={this.startIterations} />
        <AutomataList
          automata={this.state.automata}
          handleCellChange={this.handleCellChange}
        />
      </div>
    );
  }
}

export default App;
