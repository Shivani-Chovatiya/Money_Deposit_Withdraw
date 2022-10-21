import React from "react";
import { useSelector } from "react-redux";

const AccountType = () => {
  const isSavingAccount = useSelector(({ banking }) => banking.isSavingAccount);
  // const state = useSelector((state) => state.isSavingAccount);
  // console.log(state);

  return (
    <div>
      <hr />
      <h1
        className={`is-size-3 has-text-link has-text-centered ${
          isSavingAccount ? "has-text-danger" : "has-text-link"
        }`}
      >
        {isSavingAccount ? "Saving Accounts" : "Checking Account"}
      </h1>
    </div>
  );
};

export default AccountType;
