import React, { Component } from "react";
import "./App.scss";
import { mod, zeroArray } from "./utils/utils";
import { rules, defaultSize } from "./utils/config";

import AutomataList from "./components/AutomataList";
import Dashboard from "./components/Dashboard";
import Controls from "./components/Controls";

class App extends Component {
  constructor(props) {
    super(props);
    this.cache = {};
    this.myRef = React.createRef();
    this.state = {
      inProgress: false,
      automata: [zeroArray(defaultSize)],
      repeatingAt: null,
      rules: rules[2],
      numberOfCells: defaultSize,
      numberOfColors: 2
    };
  }

  toggleNumberOfColors = () => {
    this.setState({
      numberOfColors: 5 - this.state.numberOfColors,
      rules: rules[5 - this.state.numberOfColors]
    });
  };

  resetRules = () => {
    this.setState({
      rules: rules[this.state.numberOfColors]
    });
  };

  reset = () => {
    this.cache = {};
    this.setState({
      inProgress: false,
      automata: [this.state.automata[0]],
      repeatingAt: null
    });
  };

  updateNumberCells = e => {
    e.preventDefault();
    let inputValue = e.target.numberOfCells.value;
    if (inputValue < 1 || inputValue > 13) return;
    this.setState({
      automata: [zeroArray(inputValue)],
      numberOfCells: inputValue
    });
  };

  pause = () => {
    this.setState({
      inProgress: false
    });
  };

  startIterations = () => {
    this.cache[JSON.stringify(this.state.automata[0])] = true;
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
    startState[i] = (startState[i] + 1) % this.state.numberOfColors;
    this.setState({
      automata: [startState]
    });
  };

  toggleCellRules = c => {
    let rules = { ...this.state.rules };
    rules[c] = (rules[c] + 1) % this.state.numberOfColors;
    this.setState({
      rules: rules
    });
  };

  iterateUntilRepeat = () => {
    let automata = [...this.state.automata];
    let currentState = automata[automata.length - 1];
    let nextState = this.calculateNextState(currentState);
    let repeatingAt = this.checkIfRepeatState(nextState);
    automata.push(nextState);
    this.cache[JSON.stringify(nextState)] = true;
    if (!this.state.inProgress) return;
    this.setState(
      {
        automata: automata,
        repeatingAt: repeatingAt
      },
      () => {
        if (this.state.repeatingAt === null && this.state.inProgress) {
          setTimeout(() => {
            this.scrollToBottom();
            this.iterateUntilRepeat();
          }, 50);
        }
      }
    );
  };

  calculateNextState = state => {
    return state.map((cell, i) => {
      let parentCells =
        "" +
        state[mod(i - 1, state.length)] +
        state[i] +
        state[mod(i + 1, state.length)];
      return this.state.rules[parentCells];
    });
  };

  checkIfRepeatState = state => {
    let nextState = JSON.stringify(state);

    // If not a repeat elemenet
    if (!this.cache[nextState]) return null;

    // If a repeat element, return index
    for (let i = 0; i < this.state.automata.length; i++) {
      let previousState = JSON.stringify(this.state.automata[i]);
      if (nextState === previousState) {
        return i;
      }
    }
  };

  scrollToBottom = () => {
    window.scrollTo(0, this.myRef.current.offsetTop);
  };

  render() {
    if (this.state.repeatingAt != null)
      console.log("App render repeating at", this.state.repeatingAt);
    return (
      <div className="App">
        <Dashboard
          reset={this.reset}
          pause={this.pause}
          startIterations={this.startIterations}
        />
        <Controls
          rules={this.state.rules}
          toggleCellRules={this.toggleCellRules}
          updateNumberCells={this.updateNumberCells}
          toggleNumberOfColors={this.toggleNumberOfColors}
          numberOfColors={this.state.numberOfColors}
        />
        <AutomataList
          automata={this.state.automata}
          handleCellChange={this.handleCellChange}
        />
        <div ref={this.myRef} />
      </div>
    );
  }
}

export default App;
