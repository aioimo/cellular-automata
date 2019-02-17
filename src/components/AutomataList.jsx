import React, { Component } from "react";
import "../App.css";

class AutomataList extends Component {
  constructor(props) {
    super(props);
  }

  renderEntireList = () => {
    let automata = this.props.automata;
    return automata.map((iteration, iterationIndex) => (
      <div key={iterationIndex} className="iteration">
        {" "}
        {automata.length - iterationIndex}
        {iteration.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            onClick={() => this.props.handleCellChange(cellIndex)}
            className={cell ? "cell active" : "cell"}
          />
        ))}
      </div>
    ));
  };

  render() {
    return <div className="automata-list">{this.renderEntireList()}</div>;
  }
}

export default AutomataList;
