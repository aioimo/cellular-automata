import React, { Component } from "react";

import Form from "./Form";

import { colorCoder } from "../utils/config";

class Controls extends Component {
  renderRule = (rule, i) => {
    return (
      <div className="rule" key={i}>
        <div className="static">
          <div className={colorCoder[rule[0]]} />
          <div className={colorCoder[rule[1]]} />
          <div className={colorCoder[rule[2]]} />
        </div>
        <div
          onClick={() => this.props.toggleCellRules(rule)}
          className={colorCoder[this.props.rules[rule]]}
        />
      </div>
    );
  };

  renderAllRules = () => {
    let ruleCases = Object.keys(this.props.rules);
    ruleCases.sort();
    return ruleCases.map((rule, i) => this.renderRule(rule, i));
  };

  render() {
    return (
      <div className="Controls">
        <Form
          updateNumberCells={this.props.updateNumberCells}
          toggleNumberOfColors={this.props.toggleNumberOfColors}
          numberOfColors={this.props.numberOfColors}
        />
        {this.renderAllRules()}
        <div style={{ height: "300px" }} />
      </div>
    );
  }
}

export default Controls;
