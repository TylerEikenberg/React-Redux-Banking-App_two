import React from "react";

function LoginForm({ clickSubmitHandle }) {
  return (
    <div>
      <form className="LoginForm-form">
        <label>Login</label>
        <input className="LoginForm-input" type="text" placeholder="username" />
        <input disabled={false} className="LoginForm-submit" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
