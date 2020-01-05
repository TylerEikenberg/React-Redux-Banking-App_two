import React from "react";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const dispatch = useDispatch();

  function loanApplyHandle() {
    dispatch({ type: "APPLY" });
  }
  return (
    <div className="homepage-contents-container">
      <h1 className="balance-h1">Balance: ${balance}</h1>
      <h2>{loan ? "Loan Approved" : "Loan Required"}</h2>
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
