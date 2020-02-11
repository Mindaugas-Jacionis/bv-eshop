import React from "react";
import "./index.css";

import Timer from "../Timer";

function CartItem({ products, item, onRemove, incrementItem, decrementItem }) {
  const { title } = products.find(product => item.id === product.id) || {};

  return (
    <div>
      <span>{title}</span>
      <div>
        <button onClick={decrementItem}>-</button>
        <span>{item.count}</span>
        <button onClick={incrementItem}>+</button>
      </div>
      <button onClick={onRemove}>
        <span role="img" aria-label="remove cart item illustration">
          ❌
        </span>
      </button>
    </div>
  );
}

class Cart extends React.Component {
  state = {
    isVisible: false
  };

  // UNSAFE_componentWillMount() {
  //   console.log("WILL MOUNT");
  // }

  componentDidMount() {
    console.log("DID MOUNT");
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("WILL RECEIVE PROPS", { props: this.props, nextProps });
  // }

  shouldComponentUpdate() {
    console.log("SHOULD UPDATE?");
    return true;
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log("WILL UPDATE", { nextState, nextProps });
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", { state, props });

    if (!props.cart.length) {
      return { isVisible: false };
    }

    return null;
  }

  toggleVisibility = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    console.log("RENDER");
    const { isVisible } = this.state;
    const { products, cart, removeFromCart, decrementItem, incrementItem } = this.props;
    const className = `Cart ${isVisible ? "Cart--active" : "Cart--inactive"}`;
    const Component = isVisible ? "div" : "button";
    const props = isVisible ? {} : { onClick: this.toggleVisibility };

    return (
      <Component className={className} {...props}>
        {isVisible && <Timer />}
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
            {cart.map(item => (
              <CartItem
                key={item.id}
                incrementItem={() => incrementItem(item.id)}
                decrementItem={() => decrementItem(item.id)}
                onRemove={() => removeFromCart(item.id)}
                products={products}
                item={item}
              />
            ))}
          </React.Fragment>
        )}
      </Component>
    );
  }
}

export default Cart;
