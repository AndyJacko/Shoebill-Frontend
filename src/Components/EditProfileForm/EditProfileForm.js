import React, { useRef } from "react";

import "./EditProfileForm.css";

const EditProfileForm = ({ loggedInUser }) => {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const realnameInputRef = useRef();
  const profilepicInputRef = useRef();
  const birthdateInputRef = useRef();
  const locationInputRef = useRef();
  const bioInputRef = useRef();
  const linkInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const realname = realnameInputRef.current.value;
    const profilepic = profilepicInputRef.current.value;
    const birthdate = birthdateInputRef.current.value;
    const location = locationInputRef.current.value;
    const bio = bioInputRef.current.value;
    const link = linkInputRef.current.value;

    const newUserDetails = {
      username,
      email,
      password: password || loggedInUser.password,
      realname,
      profilepic,
      birthdate,
      location,
      bio,
      link,
    };

    console.log(newUserDetails);
    //send to api
  };

  return (
    <div className="edit-profile-form-container">
      <h2>Edit Profile</h2>

      <form onSubmit={submitHandler}>
        <div>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            ref={usernameInputRef}
            defaultValue={loggedInUser.username}
          />
        </div>

        <div>
          <p>Email Address</p>
          <input
            type="email"
            placeholder="Email Address"
            ref={emailInputRef}
            defaultValue={loggedInUser.email}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="New Password"
            ref={passwordInputRef}
          />
        </div>

        <div>
          <p>Real Name</p>
          <input
            type="text"
            placeholder="Real Name"
            ref={realnameInputRef}
            defaultValue={loggedInUser.realname}
          />
        </div>

        <div>
          <p>Custom Avatar URL</p>
          <input
            type="text"
            placeholder="https://linktoyourimage.com/pic.jpg"
            ref={profilepicInputRef}
            defaultValue={loggedInUser.profilepic}
          />
        </div>

        <div>
          <p>Date Of Birth</p>
          <input
            type="date"
            placeholder="D.O.B,"
            ref={birthdateInputRef}
            defaultValue={loggedInUser.birthdate}
          />
        </div>

        <div>
          <p>Location</p>
          <input
            type="text"
            placeholder="Manchester, UK"
            ref={locationInputRef}
            defaultValue={loggedInUser.location}
          />
        </div>

        <div>
          <p>Bio</p>
          <input
            type="text"
            placeholder="A short bio about yourself"
            ref={bioInputRef}
            defaultValue={loggedInUser.bio}
          />
        </div>

        <div>
          <p>Website Link</p>
          <input
            type="text"
            placeholder="Your website link"
            ref={linkInputRef}
            defaultValue={loggedInUser.link}
          />
        </div>

        <br />
        <br />

        <button type="submit">SAVE PROFILE</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
