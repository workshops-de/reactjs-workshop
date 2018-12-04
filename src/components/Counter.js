import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  decrementCount() {
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrementCount.bind(this)}>-</button>
        {this.state.count}
        <button onClick={this.incrementCount.bind(this)}>+</button>
      </div>
    );
  }
}

export default Counter;
