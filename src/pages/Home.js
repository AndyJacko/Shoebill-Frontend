import React, { useEffect } from "react";

import Login from "../Components/Login";
import Register from "../Components/Register";

const HomePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <div>Home Page</div>
      <div>
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default HomePage;
