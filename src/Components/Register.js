import React from "react";

const Register = () => {
  const submitHandler = () => {};

  return (
    <form onSubmit = {submitHandler}>

<div id="container2"></div><div class="specialheading3">Shoebill Signup
            <label><p class="contactform">Username
            <br></br><input onClick={("")} placeholder="Username"/>
            </p>
            </label>

            <label><p class="contactform">Email
            <br></br><input onClick={("")} placeholder="Email address"/>
            </p>
            </label>

            <label><p class="contactform">Password
                <br></br><input onClick={("")} placeholder="Password"/>
                </p>
            </label>

            <label><p class="contactform">Custom avatar URL - optional
                <br></br><input onClick={("")} placeholder="Custom avatar URL"/></p>
            </label>

            <button type="password">Register</button>

        </div>
        </form>
  );
};

export default Register;
