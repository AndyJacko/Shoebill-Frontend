<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 813ca10 (.)

import "./UserItem.css";

const UserItem = ({ user }) => {
<<<<<<< HEAD
  const [userpic, setUserPic] = useState();

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
    <div className="user-item-container">
      <div className="user-item-info">
        <div className="user-item-pic">
          {userpic && <img src={userpic} alt={user.username} />}
        </div>
=======
  return (
    <div className="user-item-container">
      <div className="user-item-info">
        <div className="user-item-pic">Pic</div>
>>>>>>> 813ca10 (.)

        <div>
          <div>
            {user.username}&nbsp;
            <span className="user-info-username">@{user.username}</span>
          </div>

<<<<<<< HEAD
          <div>
            {user.bio
              ? user.bio
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </div>
=======
          <div>Bio</div>
>>>>>>> 813ca10 (.)
        </div>
      </div>

      <div className="user-item-follow">Follow</div>
    </div>
  );
};

export default UserItem;
