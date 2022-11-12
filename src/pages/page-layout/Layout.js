import React from "react";

import LeftSidebar from "./Sidebars/LeftSidebar/LeftSidebar";
import RightSidebar from "./Sidebars/RightSidebar/RightSidebar";
import Latest from "../../Components/Latest/Latest";

import "./Layout.css";

const Layout = (props) => {
  const { isLoggedIn, loggedInUser, onLogin, onLogout } = props;

  return (
    <div className="layout-container">
      <div className="left-sidebar">
        <LeftSidebar
          isLoggedIn={isLoggedIn}
          loggedInUser={loggedInUser}
          onLogin={onLogin}
          onLogout={onLogout}
        />
      </div>

      <div className="main-content">
        <div>
          <Latest isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
        </div>

        <div className="page-content">{props.children}</div>
      </div>

      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
