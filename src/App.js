import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img className="Header__logo" src="https://logodix.com/logo/2004335.png" alt="Logo" />
      </header>
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
      <footer className="Footer">Copryght {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
