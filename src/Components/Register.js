import React from "react";

const Register = () => {

    const submitHandler = () => {
    
    }

    return (
        <form onSubmit = {submitHandler}>
            <br></br>
            <br></br>
            <label>Username:
            <input onClick={("")} />
            </label>
            <br></br>

            <label>Email:
            <input onClick={("")} />
            </label>
            <br></br>

            <label>Password:
                <input onClick={("")} />
            </label>
            <br></br>
            <br></br>
            <button type="password">Register</button>
        </form>
    )
}

export default Register