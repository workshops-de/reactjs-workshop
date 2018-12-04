import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue };
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

Counter.propTypes = {
  initialValue: PropTypes.number
}

Counter.defaultProps = {
  initialValue: 50
}

export default Counter;
