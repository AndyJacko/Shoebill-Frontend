import React from "react";

import LeftSidebar from "./Sidebars/LeftSidebar/LeftSidebar";
import RightSidebar from "./Sidebars/RightSidebar/RightSidebar";
import Latest from "../../Components/Latest/Latest";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="left-sidebar">
        <LeftSidebar />
      </div>

      <div className="main-content">
        <div>
          <Latest />
        </div>

        <div className="page-content">{children}</div>
      </div>

      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
