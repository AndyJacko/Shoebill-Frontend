import React from "react";

const Update = () => {

    const submitHandler = () => {
    
    }

    return (
        <form onSubmit = {submitHandler}>

<div id="container2"></div><div class="specialheading3">Update your user details


<br></br>
<br></br>
            Current Avatar:
            <br>
            </br><img src="https://picsum.photos/200" alt="something"></img>
            <br></br>
            <br></br>
            <label><p class="contactform">Username
            <input onClick={("")} placeholder="Username"/>
            </p>
            </label>

            <label><p class="contactform">Email
            <input onClick={("")} placeholder="Email address"/>
            </p>
            </label>

            <label><p class="contactform">Password
                <input onClick={("")} placeholder="Custom avatar URL"/>
                </p>
            </label>

            <label><p class="contactform">Custom avatar URL:
                <input onClick={("")} placeholder="Your name"/></p>
            </label>
            <br></br>


            <br></br>
            <button type="password">Submit</button>

        </div>
        </form>



    )
}

export default Update