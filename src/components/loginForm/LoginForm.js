import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState(null);

  const clickSubmitHandle = e => {
    e.preventDefault();
  };
  const inputChangeHandle = e => {
    e.preventDefault();
    console.log(e.target.value);
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
