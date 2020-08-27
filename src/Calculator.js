import React, { Component } from "react";
import "./App.css";

class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
      operator: "",
      num1: 0,
      num2: 0,
      result: 0,
    };
  }

  handleOperatorChange = (e) => {
    this.setState({
      operator: e.target.value,
    });
  };

  setNum = (e) => {
    this.setState({
      [e.target.name]: Number(e.target.value),
    });
  };
  // setNum = (e, num) => {
  //   e.preventDefault();
  //   this.setState({
  //     [num]: Number(e.target.value),
  //   });
  //   console.log(num)
  // };
  actionHandler = (e, num1, num2) => {
    e.preventDefault();
    if (this.state.operator === "+") {
      this.setState({
        result: this.state.num1 + this.state.num2,
      });
    } else if (this.state.operator === "-") {
      this.setState({
        result: this.state.num1 - this.state.num2,
      });
    } else if (this.state.operator === "*") {
      this.setState({
        result: this.state.num1 * this.state.num2,
      });
    } else if (this.state.operator === "/") {
      this.setState({
        result: this.state.num1 / this.state.num2,
      });
    }
    console.log(this.state.sum);
  };
  render() {
    return (
      <div className="container">
        <h1>Calculate with React!</h1>

        <div className="add">
          <form onSubmit={this.setNum}>
            <input
              type="number"
              name="num1"
              placeholder="Enter your first number"
              value={this.state.num1}
              onChange={(e) => {
                this.setNum(e, "num1");
              }}
            />
            <label>
              <select
                value={this.state.operator}
                onChange={(e) => {
                  this.handleOperatorChange(e);
                }}
              >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </label>
            <input
              type="number"
              name="num2"
              placeholder="Enter your second number"
              value={this.state.num2}
              onChange={(e) => this.setNum(e, "num2")}
            />
            <button
              type="submit"
              onClick={(e) => this.actionHandler(e, "result")}
            >
              Answer
            </button>

            <h5>{this.state.result}</h5>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
