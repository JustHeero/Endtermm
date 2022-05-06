import React, { Component } from "react";
import s from "./States.module.css";

class States extends Component {
  constructor() {
    super();
    this.state = {
      message: "State",
    };
  }
  changeMessage() {
    this.setState({
      message: "Props",
    });
  }
  render() {
    return (
      <div>
        {" "}
        <h1 className={s.theme}>{this.state.message}</h1>
        <div className={s.state}>
          <h2>State in React.js</h2>
          <p>
            State represent values that have already been rendered, such as what
            you see on the screen. SetState calls are asynchronous, so don't
            expect this. state will display the new value immediately after
            calling setState.
          </p>

          <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
      </div>
    );
  }
}

export default States;
