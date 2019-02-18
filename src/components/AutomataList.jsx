import React, { Component } from "react";

import { colorCoder } from "../utils/config";

class AutomataList extends Component {
  renderEntireList = () => {
    let automata = this.props.automata;
    return automata.map((iteration, iterationIndex) => (
      <div key={iterationIndex} className="iteration">
        {" "}
        <span className="iteration-number">{iterationIndex}</span>
        {iteration.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            onClick={() => this.props.handleCellChange(cellIndex)}
            className={colorCoder[cell]}
          />
        ))}
      </div>
    ));
  };

  render() {
    return <div className="AutomataList">{this.renderEntireList()}</div>;
  }
}

export default AutomataList;
