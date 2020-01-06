import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "../actions/balanceActions";

function DepositPage() {
  const [amount, setAmount] = useState(0);
  const balance = useSelector(state => state.balanceReducer.balance);
  const loading = useSelector(state => state.balanceReducer.loading);
  const dispatch = useDispatch();

  // const handleDeposit = () => {
  //   dispatch(balanceActions.depositAsync(10));
  // };
  const clickDepositHandle = e => {
    e.preventDefault();
    dispatch(balanceActions.depositAsync(amount));
  };
  const inputChangeHandle = e => {
    e.preventDefault();
    let amount = parseInt(e.target.value);
    setAmount(amount);
  };

  return (
    <div className="contents-container">
      {loading ? (
        <h1 className="loading-h1">Loading...</h1>
      ) : (
        <h1 className="balance-h1">Balance: ${balance}</h1>
      )}
      <form onSubmit={clickDepositHandle} className="LoginForm-form">
        <label>Deposit Amount</label>
        <input
          className="LoginForm-input"
          type="text"
          name="username"
          onChange={inputChangeHandle}
          placeholder="$0.00"
        />
        <input
          disabled={false}
          className="LoginForm-submit"
          type="submit"
          value="Deposit"
        />
      </form>
    </div>
  );
}

export default DepositPage;
