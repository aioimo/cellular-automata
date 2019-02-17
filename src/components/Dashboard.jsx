import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <button onClick={this.props.startIterations}>
          Iterate Until Repeat
        </button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Dashboard;
