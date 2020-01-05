import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul style={{ display: "flex" }}>
            <li className="li-style">
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
      <Route path="/" />
      <Route path="/deposit" />
      <Route path="/withdraw" />
    </BrowserRouter>
  );
}

export default App;
