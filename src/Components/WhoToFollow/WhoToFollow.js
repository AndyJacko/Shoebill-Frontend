import React, { useEffect, useState } from "react";

import "./WhoToFollow.css";

const UserItem = ({ user }) => {
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
    <div className="whotofollow-container">
      <div className="whotofollow-info">
        <div className="whotofollow-pic">
          {userpic && <img src={userpic} alt={user.username} />}
        </div>

        <div>
          <div>{user.username}</div>
          <div>
            <span className="whotofollow-username">@{user.username}</span>
          </div>
        </div>
      </div>

      <div className="whotofollow-follow">Follow</div>
    </div>
  );
};

export default UserItem;
