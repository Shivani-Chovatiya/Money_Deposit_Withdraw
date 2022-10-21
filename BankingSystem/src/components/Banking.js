import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  collectInterest,
  deleteAccount,
  deposit,
  toggleAccount,
  withdraw,
} from "../actions";

const Banking = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDeposit = () => {
    dispatch(deposit(+amount));
  };

  const handleWithDraw = () => {
    dispatch(withdraw(+amount));
  };

  const handleCollectInterest = () => {
    dispatch(collectInterest());
  };

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

  const handleToggleAccount = () => {
    dispatch(toggleAccount());
  };

  return (
    <div>
      <div className="field">
        <input
          type="number"
          className="input"
          placeholder="amount"
          value={amount}
          onChange={handleChange}
        />
      </div>

      <button className="button mr-2 is-success" onClick={handleDeposit}>
        Deposit
      </button>
      <button className="button mr-2 is-danger" onClick={handleWithDraw}>
        Withdraw
      </button>
      <button className="button mr-2 is-link" onClick={handleCollectInterest}>
        Collect Interest
      </button>
      <button className="button mr-2 is-info" onClick={handleDeleteAccount}>
        Delete Account
      </button>
      <button className="button mr-2 is-warning" onClick={handleToggleAccount}>
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;
