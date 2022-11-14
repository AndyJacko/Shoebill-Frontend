import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import UserProfileInfo from "../Components/UserProfileInfo/UserProfileInfo";
import UserProfileBarkItem from "../Components/UserProfileBarkItem/UserProfileBarkItem";
import Spinner from "../Components/UI/Spinner/Spinner";

import "./Profile.css";

const Profile = ({ isLoggedIn, loggedInUser, onLogout }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://cnmaster-shoebill.herokuapp.com/readUserOne/${id}`
      );
      const data = await response.json();

      if (data.user._id) {
        setIsLoading(false);
        setUser(data.user);
      }
    };

    getUser();
  }, [id]);

  const deleteHandler = async () => {
    if (window.confirm("Delete your profile?")) {
      const response = await fetch(
        `https://cnmaster-shoebill.herokuapp.com/deleteUser/${user._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data.message) {
        onLogout();
        navigate("/");
      }
    }
  };

  return (
    <>
      <h2 className="padding-20">User Profile</h2>

      {isLoading && <Spinner />}

      {isLoggedIn && id === loggedInUser._id && (
        <div className="user-profile-options">
          <div>
            <Link to={`/editprofile`} className="lsb-link">
              <div className="lsb-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>
              Edit Profile
            </Link>
          </div>
          <div>
            <div className="lsb-link" onClick={deleteHandler}>
              <div className="lsb-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
              </div>
              Delete Profile
            </div>
          </div>
        </div>
      )}

      {!isLoading && user._id && (
        <>
          <UserProfileInfo user={user} />

          {user.posts[0] && (
            <div>
              <h2 className="padding-20">Barks</h2>

              {user.posts.map((post) => (
                <UserProfileBarkItem key={post._id} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
