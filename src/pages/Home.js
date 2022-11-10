import React, { useEffect } from "react";


const HomePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <div>Home Page</div><br></br>
     
    </div>
  );
};

export default HomePage;