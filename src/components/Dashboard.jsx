import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <button>Settings</button>
        <button onClick={this.props.startIterations}>
          Iterate Until Repeat
        </button>
        <button onClick={this.props.reset}>Reset</button>
        <button onClick={this.props.pause}>Pause</button>
      </div>
    );
  }
}

export default Dashboard;
