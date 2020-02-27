import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";

import useTimer from "./hooks/useTimer";

const CURRENCY = "$";

function App(props) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { time, clear } = useTimer();
  // const { time: times } = useTimer(5);

  useEffect(() => {
    if (time === 1) {
      clear();
    }
  }, [clear, time]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const result = await fetch("https://academy-year-2019.herokuapp.com/food-shop/products");
      const json = await result.json();
      setProducts(json);
    } catch (error) {
      setError("Ooops something went south");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
    setCart(cart.filter(item => item.id !== id));
  };

  const incrementItem = id => {
    let newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === id);

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
        {/* <Counter /> */}
        <h1 style={{ marginLeft: "50px" }}>{time}</h1>
        {/* <h1 style={{ marginLeft: "40px" }}>{times}</h1> */}
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path="/">
                <React.Fragment>
                  <Main
                    loading={loading}
                    error={error}
                    data={products}
                    currency={CURRENCY}
                    addToCart={addToCart}
                  />
                  <Cart
                    cart={cart}
                    products={products}
                    removeFromCart={removeFromCart}
                    incrementItem={incrementItem}
                    decrementItem={decrementItem}
                  />
                </React.Fragment>
              </Route>
              <Route exact path="/404">
                <div>
                  <p>You're Lost Pal :(</p>
                </div>
              </Route>
              <Redirect to="/404" />
            </Switch>
          </Router>
        </ErrorBoundary>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
