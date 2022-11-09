import React, { useEffect } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Update from "../Components/Update";
import Newbill from "../Components/Newbill";
import Testingmodal from "../Components/Testingmodal";

// import Testingmodaltwo from "../Components/Testingmodaltwo";

const HomePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <div>Home Page</div>
      <div>
      <Testingmodal />

        <Login />
        <Register />
        <Update />
        <Newbill />

      </div>
    </div>
  );
};

export default HomePage;