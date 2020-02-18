import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";
// import Counter from "./components/Counter";

const CURRENCY = "$";

class App extends React.Component {
  state = {
    cart: [],
    products: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://academy-year-2019.herokuapp.com/food-shop/products")
      .then(response => response.json())
      .then(products => {
        this.setState({ products, loading: false });
      })
      .catch(() => {
        this.setState({ error: "Ooops something went south", loading: false });
      });
  }

  addToCart = id => {
    const { cart } = this.state;

    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);

    if (itemIndex > -1) {
      newCart[itemIndex].count = newCart[itemIndex].count + 1;
    } else {
      newCart = [...newCart, { id, count: 1 }];
    }

    this.setState({ cart: newCart });
  };

  removeFromCart = id => {
    const { cart } = this.state;
    const newCart = cart.filter(item => item.id !== id);

    this.setState({ cart: newCart });
  };

  incrementItem = id => {
    const { cart } = this.state;
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);

    newCart[itemIndex].count = newCart[itemIndex].count + 1;

    this.setState({ cart: newCart });
  };

  decrementItem = id => {
    const { cart } = this.state;
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);
    const newCount = newCart[itemIndex].count - 1;

    newCart[itemIndex].count = newCount > 0 ? newCount : 1;

    this.setState({ cart: newCart });
  };

  render() {
    const { cart, products, loading, error } = this.state;

    console.log("PRODUCTS", products);

    return (
      <ErrorBoundary
        component={() => (
          <div>
            Whole app is down{" "}
            <span role="img" aria-label="monkey closing it's eyes">
              🔥
            </span>
          </div>
        )}
      >
        <div className="App">
          <Header />
          {/* <Counter /> */}
          <ErrorBoundary>
            <Main
              loading={loading}
              error={error}
              data={products}
              currency={CURRENCY}
              addToCart={this.addToCart}
            />
            <Cart
              cart={cart}
              products={products}
              removeFromCart={this.removeFromCart}
              incrementItem={this.incrementItem}
              decrementItem={this.decrementItem}
            />
          </ErrorBoundary>
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
