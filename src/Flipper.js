import React, { PureComponent } from "react";

import Front from "./Front";
import Back from "./Back";

import "./App.css";

class Flipper extends PureComponent {
  render() {
    return (
      <div className={"flipper-container " + this.props.orientation}>
        <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
          <Front>the front!</Front>
          <Back>the back!</Back>
        </div>
      </div>
    );
  }
}

Flipper.propTypes = {};

export default Flipper;
