import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const balance = useSelector(state => state.balance);
  return <h1>Balance: ${balance}</h1>;
}

export default HomePage;
