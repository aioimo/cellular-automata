import React, { Component } from "react";
import "./App.css";

// import Form from "./components/Form";
import AutomataList from "./components/AutomataList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        <AutomataList />
      </div>
    );
  }
}

export default App;
