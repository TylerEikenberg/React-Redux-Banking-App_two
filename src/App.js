import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
import LoginForm from "./components/loginForm/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <LoginForm />
          <ul className="App-ul">
            <NavLink
              className="App-link"
              to="/"
              exact
              activeClassName="li-active"
            >
              <li className="li-style">Home</li>
            </NavLink>
            <NavLink
              exact
              className="App-link"
              to="/deposit"
              activeClassName="li-active"
            >
              <li className="li-style">Deposit</li>
            </NavLink>
            <NavLink
              exact
              className="App-link"
              to="/withdraw"
              activeClassName="li-active"
            >
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
