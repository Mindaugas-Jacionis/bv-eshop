import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

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
    const itemIndex = cart.findIndex(item => item.id === id);
    let newCart = cart;

    if (itemIndex > -1) {
      newCart[itemIndex].count = newCart[itemIndex].count + 1;
    } else {
      newCart = [...newCart, { id, count: 1 }];
    }

    setCart(newCart);
  };

  return (
    <div className="App">
      <Header />
      <Main data={DATA} currency={CURRENCY} addToCart={addToCart} />
      <Footer />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
