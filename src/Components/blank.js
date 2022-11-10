import React from "react";

const Post = () => {
  const submitHandler = () => {};

  return (
    <form onSubmit = {submitHandler}>

<div id="container2"></div><div class="specialheading3">Compose bill
            <label><p class="contactform">Your text
            <br></br><input onClick={("")} placeholder="What's new, Shoebill?"/>
            </p>
            </label>
            <button type="password">Post your bill</button>

        </div>
        </form>
  );
};

export default Post;
