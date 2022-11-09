import React, { useEffect } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Update from "../Components/Update";
import Post from "../Components/Post";

const HomePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <div>Home Page</div>
      <div>
        <Login />
        <Register />
        <Update />
        <Post />

      </div>
    </div>
  );
};

export default HomePage;