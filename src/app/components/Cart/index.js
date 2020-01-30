import React from "react";
import "./index.css";

class Cart extends React.Component {
  state = {
    isVisible: false
  };

  toggleVisibility = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    const className = `Cart ${isVisible ? "Cart--active" : "Cart--inactive"}`;
    const Component = isVisible ? "div" : "button";
    const props = isVisible ? {} : { onClick: this.toggleVisibility };

    return (
      <Component className={className} {...props}>
        {!isVisible && (
          <span role="img" aria-label="cart illustration">
            🛒
          </span>
        )}
        {isVisible && (
          <React.Fragment>
            <button type="button" onClick={this.toggleVisibility}>
              X
            </button>
            <div>iamginary product</div>
            <div>imaginary product 2</div>
            <div>imaginary product 3</div>
          </React.Fragment>
        )}
      </Component>
    );
  }
}

export default Cart;
