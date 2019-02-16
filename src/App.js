import React, { Component } from "react";
import "./App.css";

// import Form from "./components/Form";
import AutomataList from "./components/AutomataList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the App Component</h1>
        {/* <Form /> */}
        <AutomataList />
      </div>
    );
  }
}

export default App;
