import React from "react";

const Update = () => {

    const submitHandler = () => {
    
    }

    return (
        <form onSubmit = {submitHandler}>

<br></br>
            Current Avatar:<img src="https://picsum.photos/200" alt="something"></img>
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

            <label>Custom avatar URL:
                <input onClick={("")} />
            </label>
            <br></br>


            <br></br>
            <button type="password">Submit</button>

            
        </form>
    )
}

export default Update