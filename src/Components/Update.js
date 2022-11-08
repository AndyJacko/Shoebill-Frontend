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
            <label>Username
            <input onClick={("")} placeholder="Username"/>
            </label>
            <br></br>

            <label>Email
            <input onClick={("")} placeholder="Email address"/>
            </label>
            <br></br>

            <label>Password
                <input onClick={("")} placeholder="Custom avatar URL"/>
            </label>
            <br></br>

            <label>Custom avatar URL:
                <input onClick={("")} placeholder="Your name"/>
            </label>
            <br></br>


            <br></br>
            <button type="password">Submit</button>


            <p class="contactform">Name
            <input id="emailinput" type="text" placeholder="Your name" name="text1" />
        
        </p>
        <p class="contactform">Subject
            <input id="emailinput" type="text" placeholder="Subject" name="text1"  />
        
        </p>
        <p class="contactform">Message
            <input id="emailinput" type="text" placeholder="Your message" name="text1" />
        
        </p>


        <button type="password">Submit</button>
            
        </form>



    )
}

export default Update