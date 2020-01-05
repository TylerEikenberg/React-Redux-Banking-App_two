import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const balance = useSelector(state => state.balance);
  return (
    <div>
      <h1>Balance: ${balance}</h1>
      <h2>Loan Required</h2>
      <button>Apply For Loan</button>
    </div>
  );
}

export default HomePage;
