import React from "react";

import "./UserItem.css";

const UserItem = ({ user }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-info">
        <div className="user-item-pic">Pic</div>

        <div>
          <div>
            {user.username}&nbsp;
            <span className="user-info-username">@{user.username}</span>
          </div>

          <div>Bio</div>
        </div>
      </div>

      <div className="user-item-follow">Follow</div>
    </div>
  );
};

export default UserItem;
