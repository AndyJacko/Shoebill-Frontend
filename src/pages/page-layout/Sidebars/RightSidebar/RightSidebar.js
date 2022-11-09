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
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();

      if (data[0].id) {
        setIsLoading(false);
        setUsers(data);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}

      {!isLoading && users[0].id && (
        <>
          <h2>Who To Follow</h2>
          {users.map((user) => (
            <WhoToFollow key={user.id} user={user} />
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
