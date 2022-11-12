import React from "react";

import "./Latest.css";

const Latest = ({ isLoggedIn, loggedInUser }) => {
  return (
    <>
      {isLoggedIn && (
        <>
          <div className="padding-20">
            <strong>
              Welcome back&nbsp;
              {loggedInUser.realname
                ? loggedInUser.realname
                : loggedInUser.username}
            </strong>
          </div>
        </>
      )}
      <div className="latest-barks">Latest Barks</div>
    </>
  );
};

export default Latest;
