import React from "react";

const Login = () => {
  const submitHandler = () => {};

  return (
    <form onSubmit = {submitHandler}>

<div id="container2"></div><div class="specialheading3">Shoebill Login
            <label><p class="contactform">Username
            <br></br><input onClick={("")} placeholder="Username"/>
            </p>
            </label>

            

            <label><p class="contactform">Password
                <br></br><input onClick={("")} placeholder="Password"/>
                </p>
            </label>

            

            <button type="password">Login</button>

        </div>
        </form>
  );
};

export default Login;
