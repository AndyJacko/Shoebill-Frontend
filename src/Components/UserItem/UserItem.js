import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";

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
    <div className="user-item-container">
      <div className="user-item-info">
        <Link to={`/users/${user._id}`} className="user-item-pic">
          {userpic && <img src={userpic} alt={user.username} />}
        </Link>

        <div>
          <Link to={`/users/${user._id}`}>
            {user.realname ? user.realname : user.username}
            &nbsp;
            <span className="user-info-username">@{user.username}</span>
          </Link>

          <div className="user-item-bio">{user.bio}</div>
        </div>
      </div>

      <div className="user-item-follow">Follow</div>
    </div>
  );
};

export default UserItem;
