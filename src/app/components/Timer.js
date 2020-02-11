import React from "react";

class Timer extends React.Component {
  intervalId = -1;
  state = {
    time: 60
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("Second has passed");
      this.setState(prevState => ({ time: prevState.time - 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = -1;
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <p>{time}</p>
      </div>
    );
  }
}

export default Timer;
