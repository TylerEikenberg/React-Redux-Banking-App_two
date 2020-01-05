import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WithdrawPage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const dispatch = useDispatch();

  function handleWithdraw() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }

  return (
    <div>
      <h1>Balance: ${balance}</h1>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default WithdrawPage;
