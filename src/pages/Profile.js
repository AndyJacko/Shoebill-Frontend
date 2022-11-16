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

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/readUserOne/${id}`
      );
      const data = await response.json();

      if (data.user._id) {
        setIsLoading(false);
        setUser(data.user);
      }
    };

    getUser();
  });

  const deleteHandler = async () => {
    if (window.confirm("Delete your profile?")) {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/deleteUser/${user._id}`,
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

  const addLikes = async (postId) => {
    await fetch(`${process.env.REACT_APP_REST_API}/updateLike/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
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
                <UserProfileBarkItem
                  key={post._id}
                  post={post}
                  loggedInUser={loggedInUser}
                  addLikes={addLikes}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
