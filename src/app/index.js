import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";

const CURRENCY = "$";
const DATA = [
  {
    title: "Microwave",
    id: 0,
    description: "Very Nice Short Description",
    price: 30
  },
  {
    title: "T-Shirt",
    id: 1,
    description: "Blue short sleeve t-shirt",
    price: 15
  },
  {
    title: "Toaster",
    id: 2,
    description: "Toasty toasty bread machine",
    price: 45
  },
  {
    title: "Cap",
    id: 3,
    description: "Snapback cap with logo on it",
    price: 50
  },
  {
    title: "Microwave",
    id: 4,
    description: "Very Nice Short Description",
    price: 30
  }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = id => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);

    if (itemIndex > -1) {
      newCart[itemIndex].count = newCart[itemIndex].count + 1;
    } else {
      newCart = [...newCart, { id, count: 1 }];
    }

    setCart(newCart);
  };

  const removeFromCart = id => {
    const newCart = cart.filter(item => item.id !== id);

    setCart(newCart);
  };

  const incrementItem = id => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);
    console.log({ newCart, itemIndex });

    newCart[itemIndex].count = newCart[itemIndex].count + 1;

    setCart(newCart);
  };

  const decrementItem = id => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);
    const newCount = newCart[itemIndex].count - 1;

    newCart[itemIndex].count = newCount > 0 ? newCount : 1;

    setCart(newCart);
  };

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
        <ErrorBoundary>
          <Main data={DATA} currency={CURRENCY} addToCart={addToCart} />
          <Cart
            cart={cart}
            products={DATA}
            removeFromCart={removeFromCart}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
          />
        </ErrorBoundary>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
