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

  render() {
    return (
      <button onClick={this.incrementCount.bind(this)}>
        {this.state.count}
      </button>
    );
  }
}

export default Counter;
