import React from "react";
import "./index.css";

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

  toggleVisibility = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    const { products, cart, removeFromCart, decrementItem, incrementItem } = this.props;
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
