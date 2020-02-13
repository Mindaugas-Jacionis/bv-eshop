import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log("Error happened", { info, error });
  }

  render() {
    const { children, component: ErrorComponent } = this.props;
    const { error } = this.state;

    if (error) {
      return ErrorComponent ? (
        <ErrorComponent />
      ) : (
        <div>
          Oh no! Something went horribly wrong!
          <span role="img" aria-label="monkey closing it's eyes">
            🙈
          </span>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
