import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../Components/UI/Spinner/Spinner";

import "./Profile.css";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [userpic, setUserPic] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://cnmaster-shoebill.herokuapp.com/readUserOne/${id}`
      );
      const data = await response.json();
      console.log(data.user);

      if (data.user._id) {
        setIsLoading(false);
        setUser(data.user);
      }
    };

    getUser();
  }, [id]);

  useEffect(() => {
    const getUserPic = async () => {
      const response = await fetch(`https://robohash.org/${user.username}`);

      if (response.url) {
        setUserPic(response.url);
      }
    };

    if (user.pic) {
      setUserPic(user.pic);
    } else {
      getUserPic();
    }
  }, [user]);

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && user._id && (
        <>
          <h2>User Profile</h2>

          <div className="user-profile-container">
            <div>{userpic && <img src={userpic} alt={user.username} />}</div>

            {user.realname && (
              <div className="user-profile-realname">{user.realname}</div>
            )}

            <div>@{user.username}</div>

            {user.bio && <div>{user.bio}</div>}

            <div className="user-profile-llj-container">
              <div className="user-profile-llj">
                <div className="user-profile-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                  </svg>
                </div>
                <div className="user-profile-llj-item">
                  {user.location ? user.location : "Unknown"}
                </div>
              </div>

              <div className="user-profile-llj">
                <div className="user-profile-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                  </svg>
                </div>
                <div className="user-profile-llj-item">
                  {user.link ? user.link : "No Link"}
                </div>
              </div>

              <div className="user-profile-llj">
                <div className="user-profile-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                  </svg>
                </div>
                <div className="user-profile-llj-item">
                  Joined&nbsp;
                  {new Date(user.joindate).toLocaleString("en-GB", {
                    year: "numeric",
                    month: "long",
                  })}
                </div>
              </div>
            </div>

            <div className="user-profile-ff-container">
              <div className="user-profile-ff">
                <strong>{user.following}</strong> Following
              </div>

              <div className="user-profile-ff">
                <strong>{user.followers}</strong> Followers
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
