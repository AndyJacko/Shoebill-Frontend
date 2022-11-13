import React from "react";

import "./Latest.css";

const Latest = ({ isLoggedIn, loggedInUser }) => {
  return (
    <>
      <div className="latest-barks">
        <h2>Shoebill</h2>

        {isLoggedIn && (
          <strong>
            Welcome back&nbsp;
            {loggedInUser.realname
              ? loggedInUser.realname
              : loggedInUser.username}
          </strong>
        )}
      </div>
    </>
  );
};

export default Latest;
