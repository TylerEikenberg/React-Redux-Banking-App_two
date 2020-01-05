import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "../actions/balanceActions";

function DepositPage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch({ type: "DEPOSIT", payload: 10 });
  }

  return (
    <div>
      <h1>Balance: ${balance}</h1>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default DepositPage;
