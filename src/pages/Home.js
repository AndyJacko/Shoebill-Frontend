import React, { useEffect } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Update from "../Components/Update";
import Post from "../Components/Post";

const HomePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <div>Home Page</div><br></br>
      <div>
        <Login /><br></br>
        <Register /><br></br>
        <Update /><br></br>
        <Post /><br></br>

      </div>
    </div>
  );
};

export default HomePage;