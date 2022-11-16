import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../UI/Spinner/Spinner";

import "./EditProfileForm.css";

const EditProfileForm = ({ loggedInUser }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const realnameInputRef = useRef();
  const profilepicInputRef = useRef();
  const birthdateInputRef = useRef();
  const locationInputRef = useRef();
  const bioInputRef = useRef();
  const linkInputRef = useRef();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/readUserOne/${loggedInUser._id}`
      );
      const data = await response.json();

      if (data.user._id) {
        setIsLoading(false);
        setUser(data.user);
      }
    };

    getUser();
  }, [loggedInUser._id]);

  const submitHandler = async (e) => {
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

    if (!username || !email || username.trim() === "" || email.trim() === "") {
      return;
    }

    const newUserDetails = {
      id: loggedInUser._id,
      username,
      email,
      realname,
      profilepic,
      birthdate: new Date(birthdate),
      location,
      bio,
      link,
    };

    if (password && password.trim() !== "") {
      newUserDetails.password = password;
    }

    const response = await fetch(
      `${process.env.REACT_APP_REST_API}/updateUser/`,
      {
        method: "PUT",
        body: JSON.stringify(newUserDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.message) {
      navigate(`/users/${loggedInUser._id}`);
    }
  };

  return (
    <div className="edit-profile-form-container">
      <h2>Edit Profile</h2>

      {isLoading && <Spinner />}

      {!isLoading && user._id && (
        <form onSubmit={submitHandler}>
          <div>
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              ref={usernameInputRef}
              defaultValue={user.username}
            />
          </div>

          <div>
            <p>Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              ref={emailInputRef}
              defaultValue={user.email}
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
              defaultValue={user.realname}
            />
          </div>

          <div>
            <p>Custom Avatar URL</p>
            <input
              type="text"
              placeholder="https://linktoyourimage.com/pic.jpg"
              ref={profilepicInputRef}
              defaultValue={user.profilepic}
            />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input
              type="date"
              placeholder="D.O.B,"
              ref={birthdateInputRef}
              defaultValue={user.birthdate}
            />
          </div>

          <div>
            <p>Location</p>
            <input
              type="text"
              placeholder="Manchester, UK"
              ref={locationInputRef}
              defaultValue={user.location}
            />
          </div>

          <div>
            <p>Bio</p>
            <input
              type="text"
              placeholder="A short bio about yourself"
              ref={bioInputRef}
              defaultValue={user.bio}
            />
          </div>

          <div>
            <p>Website Link</p>
            <input
              type="text"
              placeholder="https://yourwebsite.com"
              ref={linkInputRef}
              defaultValue={user.link}
            />
          </div>

          <br />
          <br />

          <button type="submit">SAVE PROFILE</button>
        </form>
      )}
    </div>
  );
};

export default EditProfileForm;
