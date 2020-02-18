import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  sub = () => {
    const { count } = this.state;

    this.setState(state => ({ count: state.count - 1 }));
    this.setState(state => ({ count: state.count - 1 }));
    this.setState(state => ({ count: state.count - 1 }));
  };

  add = () => {
    const { count } = this.state;

    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.sub}>-</button>
        {count}
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default Counter;
