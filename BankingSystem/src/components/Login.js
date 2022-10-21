import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLog } from "../actions";

const Login = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogIn = () => {
    dispatch(toggleLog());
  };

  return (
    <>
      <h1 className="is-size-3">
        {isLoggedIn ? "You are logged In " : "You are logged out"}
      </h1>
      <button className="button is-success" onClick={handleLogIn}>
        {isLoggedIn ? "Log out" : "Log In"}
      </button>
    </>
  );
};

export default Login;
