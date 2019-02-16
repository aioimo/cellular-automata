import React, { Component } from "react";
import "../App.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCells: 6
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state.numberOfCells);
    return (
      <form>
        <label htmlFor="numberOfCells">Number of Cells</label>
        <input
          type="number"
          name="numberOfCells"
          value={this.state.numberOfCells}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
