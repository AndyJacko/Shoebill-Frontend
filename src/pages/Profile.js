import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserProfileInfo from "../Components/UserProfileInfo/UserProfileInfo";
import Spinner from "../Components/UI/Spinner/Spinner";

import "./Profile.css";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

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

  return (
    <>
      <h2>User Profile</h2>

      {isLoading && <Spinner />}

      {!isLoading && user._id && (
        <>
          <UserProfileInfo user={user} />
        </>
      )}
    </>
  );
};

export default Profile;
