import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserProfileInfo from "../Components/UserProfileInfo/UserProfileInfo";
import UserProfileBarkItem from "../Components/UserProfileBarkItem/UserProfileBarkItem";
import Update from "../Components/Update";
import Spinner from "../Components/UI/Spinner/Spinner";

const Profile = ({ isLoggedIn, loggedInUser }) => {
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

  return (
    <>
      <h2 className="padding-20">User Profile</h2>

      {isLoading && <Spinner />}

      {isLoggedIn && id === loggedInUser._id && (
        <div className="padding-20">
          <Update />
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
