import React from "react";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const { balance, loan, loggedIn, username } = useSelector(state => ({
    balance: state.balanceReducer.balance,
    loan: state.loanReducer.loan,
    loggedIn: state.loginReducer.loggedIn,
    username: state.loginReducer.username
  }));
  const dispatch = useDispatch();

  const loanApplyHandle = () => {
    dispatch({ type: "APPLY" });
  };

  return (
    <div className="contents-container">
      <h1 className="balance-h1">Balance: ${balance}</h1>
      <h2 className="balance-h1">{loan ? "Loan Approved" : "Loan Required"}</h2>
      <button
        className="button-style"
        onClick={loanApplyHandle}
        disabled={loan ? true : false}
      >
        Apply For Loan
      </button>
    </div>
  );
}

export default HomePage;
