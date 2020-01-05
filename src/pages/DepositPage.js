import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "../actions/balanceActions";

function DepositPage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loading = useSelector(state => state.balanceReducer.loading);
  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch(balanceActions.depositAsync());
  }

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Balance: ${balance}</h1>}
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default DepositPage;
