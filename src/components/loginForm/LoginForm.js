import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as loginActions from "../../actions/loginActions";

function LoginForm() {
  const [username, setUsername] = useState(null);
  const dispatch = useDispatch();

  const clickSubmitHandle = e => {
    e.preventDefault();
    dispatch(loginActions.login(username));
  };
  const inputChangeHandle = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  return (
    <div>
      <form onSubmit={clickSubmitHandle} className="LoginForm-form">
        <label>Login</label>
        <input
          className="LoginForm-input"
          type="text"
          name="username"
          onChange={inputChangeHandle}
          placeholder="username"
        />
        <input disabled={false} className="LoginForm-submit" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
