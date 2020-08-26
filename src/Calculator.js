import React, {Component} from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      sum: '',
    };
  }
  setNum = (e, num) => {
    e.preventDefault();
    this.setState({
      [num]: parseInt(e.target.value),
    });
    console.log(num)
  };
  addNum = (e, num1, num2) => {
    e.preventDefault();
    this.setState({
      sum: this.state.num1 + this.state.num2,
    });
    console.log(this.state.sum)
  };
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

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
            <span>+</span>
            <input
              type="number"
              name="num2"
              placeholder="Enter your second number"
              value={this.state.num2}
              onChange={(e) => this.setNum(e, "num2")}
            />
            <button type="submit" onClick={(e) => this.addNum(e, "sum")}>=</button>
            <h5>{this.state.sum}</h5>
          </form>              
        </div>
      </div>
    );
  }
}

export default Calculator;