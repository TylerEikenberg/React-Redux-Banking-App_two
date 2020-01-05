import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="App-ul">
            <NavLink className="App-link" to="/">
              <li className="li-style">Home</li>
            </NavLink>
            <NavLink className="App-link" to="/deposit">
              <li className="li-style">Deposit</li>
            </NavLink>
            <NavLink className="App-link" to="/withdraw">
              <li className="li-style">Withdraw</li>
            </NavLink>
          </ul>
          <Route path="/" exact component={HomePage} />
          <Route path="/deposit" exact component={DepositPage} />
          <Route path="/withdraw" exact component={WithdrawPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
