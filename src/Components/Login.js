import React from "react";

const Login = () => {
  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onClick={""} />
      </label>
      <br></br>

      <label>
        Email:
        <input onClick={""} />
      </label>
      <br></br>

      <label>
        Password:
        <input onClick={""} />
      </label>
      <br></br>
      <br></br>
      <button type="password">login</button>
    </form>
  );
};

export default Login;
