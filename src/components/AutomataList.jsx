import React, { Component } from "react";
import "../App.css";

class AutomataList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: [false, false, false, false, false, false],
      automata: []
    };
  }

  handleCellChange = i => {
    let { initialState } = this.state;
    let copyinitialState = [...initialState];
    copyinitialState[i] = !copyinitialState[i];
    this.setState({
      initialState: copyinitialState
    });
  };

  renderInitialState = () => {
    let { initialState } = this.state;
    return initialState.map((cell, index) => (
      <div
        key={index}
        onClick={() => this.handleCellChange(index)}
        className={cell ? "cell active" : "cell"}
      />
    ));
  };

  render() {
    return <div className="automata-list">{this.renderInitialState()}</div>;
  }
}

export default AutomataList;
