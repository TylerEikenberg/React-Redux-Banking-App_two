import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
import LoginForm from "./components/loginForm/LoginForm";
import { logout } from "./actions/loginActions";

function App() {
  const { loggedIn, username } = useSelector(state => ({
    loggedIn: state.loginReducer.loggedIn,
    username: state.loginReducer.username
  }));
  const dispatch = useDispatch();

  const logoutClickHandle = () => {
    dispatch(logout());
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {loggedIn ? <h3>Hello {username}</h3> : <LoginForm />}
          {loggedIn ? (
            <NavLink to="/">
              <button onClick={logoutClickHandle}>Log Out</button>
            </NavLink>
          ) : null}

          <ul className="App-ul">
            <NavLink
              className="App-link"
              to={loggedIn ? "/homepage" : "/"}
              exact
              activeClassName="li-active"
            >
              <li className="li-style">Home</li>
            </NavLink>
            <NavLink
              exact
              className="App-link"
              to={loggedIn ? "/deposit" : "/"}
              activeClassName="li-active"
            >
              <li className="li-style">Deposit</li>
            </NavLink>
            <NavLink
              exact
              className="App-link"
              to={loggedIn ? "/withdraw" : "/"}
              activeClassName="li-active"
            >
              <li className="li-style">Withdraw</li>
            </NavLink>
          </ul>
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/deposit" exact component={DepositPage} />
          <Route path="/withdraw" exact component={WithdrawPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
