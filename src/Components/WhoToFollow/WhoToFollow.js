import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    if (user.profilepic) {
      setUserPic(user.profilepic);
    } else {
      getUserPic();
    }
  }, [user]);

  return (
    <div className="whotofollow-container">
      <div className="whotofollow-info">
        <Link to={`/users/${user._id}`} className="whotofollow-pic">
          {userpic && <img src={userpic} alt={user.username} />}
        </Link>

        <div>
          <Link to={`/users/${user._id}`}>
            <strong>{user.realname ? user.realname : user.username} </strong>
          </Link>

          <br />

          <Link to={`/users/${user._id}`}>
            <span className="whotofollow-username">@{user.username}</span>
          </Link>
        </div>
      </div>

      <div className="whotofollow-follow">Follow</div>
    </div>
  );
};

export default UserItem;
