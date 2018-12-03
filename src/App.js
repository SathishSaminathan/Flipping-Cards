import React, { Component } from "react";
import logo from "./logo.svg";

import Flipper from "./Flipper";
import "./App.css";

class App extends Component {
  state = {
    flipped: false
  };

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <div>
        <Flipper flipped={this.state.flipped} orientation="horizontal" />
        <Flipper flipped={this.state.flipped} orientation="vertical" />

        <div className="button-container">
          <button onClick={this.flip}>Flip!</button>
        </div>
      </div>
    );
  }
}

export default App;
