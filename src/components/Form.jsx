import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateNumberCells}>
          <label htmlFor="numberOfCells">Number of Cells</label>
          <input type="number" name="numberOfCells" />
        </form>
        <button onClick={this.props.toggleNumberOfColors}>
          Toggle Number of Colors {this.props.numberOfColors}
        </button>
      </div>
    );
  }
}

export default Form;
