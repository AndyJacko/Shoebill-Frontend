import React, { useEffect, useState } from "react";

import WhoToFollow from "../../../../Components/WhoToFollow/WhoToFollow";
import Spinner from "../../../../Components/UI/Spinner/Spinner";

import Footer from "../../Footer/Footer";

const RightSidebar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        `https://cnmaster-shoebill.herokuapp.com/readUser/5`
      );
      const data = await response.json();

      if (data.users[0]._id) {
        setIsLoading(false);
        setUsers(data.users);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}

      {!isLoading && users[0]._id && (
        <>
          <h2>Who To Follow</h2>
          {users.map((user) => (
            <WhoToFollow key={user._id} user={user} />
          ))}
        </>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RightSidebar;
