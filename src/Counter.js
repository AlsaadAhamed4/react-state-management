import React, { Component, useState } from 'react';

const getStateFromLocal = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
}

const setStateFromLocal = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  document.title = `count(${state.count})`;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getStateFromLocal();
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  updateDocumentTile() {
    document.title = `count(${this.state.count})`
  }

  onIncrement() {
    this.setState((state, props) => {
      if (state.count >= props.max) return;
      else {
        return { count: state.count + props.step };
      }
    }, () => setStateFromLocal(this.state));
  }
  onDecrement() {
    this.setState({ count: this.state.count - 1 }, this.updateDocumentTile);
  }
  onReset() {
    this.setState({ count: 0 }, this.updateDocumentTile);
  }
  render() {
    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
          <button onClick={this.onReset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;