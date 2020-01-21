import React from "react";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <div className="ProductsList">
          <ul>
            <li className="ProductsList__item">
              <h3>Microvawe</h3>
              <p>Very Nice Short Description</p>
              <div>
                <p>$30</p>
                <button>Add to Cart</button>
              </div>
            </li>
            <li className="ProductsList__item">
              <h3>Microvawe</h3>
              <p>Very Nice Short Description</p>
              <div>
                <p>$30</p>
                <button>Add to Cart</button>
              </div>
            </li>
            <li className="ProductsList__item">
              <h3>Microvawe</h3>
              <p>Very Nice Short Description</p>
              <div>
                <p>$30</p>
                <button>Add to Cart</button>
              </div>
            </li>
            <li className="ProductsList__item">
              <h3>Microvawe</h3>
              <p>Very Nice Short Description</p>
              <div>
                <p>$30</p>
                <button>Add to Cart</button>
              </div>
            </li>
            <li className="ProductsList__item">
              <h3>Microvawe</h3>
              <p>Very Nice Short Description</p>
              <div>
                <p>$30</p>
                <button>Add to Cart</button>
              </div>
            </li>
            <li className="ProductsList__item">
              <h3>Microvawe</h3>
              <p>Very Nice Short Description</p>
              <div>
                <p>$30</p>
                <button>Add to Cart</button>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
