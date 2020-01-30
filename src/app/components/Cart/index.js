import React from "react";
import "./index.css";

class Cart extends React.Component {
  state = {
    isVisible: false
  };

  render() {
    const { isVisible } = this.state;
    const className = `Cart ${isVisible ? "Cart--active" : "Cart--inactive"}`;

    return (
      <button className={className} onClick={() => this.setState({ isVisible: !isVisible })}>
        {!isVisible && (
          <span role="img" aria-label="cart illustration">
            🛒
          </span>
        )}
        {isVisible && (
          <React.Fragment>
            <div>iamginary product</div>
            <div>imaginary product 2</div>
            <div>imaginary product 3</div>
          </React.Fragment>
        )}
      </button>
    );
  }
}

export default Cart;
