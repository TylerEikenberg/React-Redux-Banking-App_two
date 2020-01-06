import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "../actions/balanceActions";

function WithdrawPage() {
  const [amount, setAmount] = useState(0);
  const balance = useSelector(state => state.balanceReducer.balance);
  const loading = useSelector(state => state.balanceReducer.loading);
  const dispatch = useDispatch();

  const clickWithdrawHandle = e => {
    e.preventDefault();
    dispatch(balanceActions.withdrawAsync(amount));
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
      <form onSubmit={clickWithdrawHandle} className="LoginForm-form">
        <label>Withdraw Amount</label>
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
          value="Withdraw"
        />
      </form>
    </div>
  );
}

export default WithdrawPage;
