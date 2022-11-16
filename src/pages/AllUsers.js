import React, { useEffect, useState } from "react";

import UserItem from "../Components/UserItem/UserItem";
import Spinner from "../Components/UI/Spinner/Spinner";

const AllUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/readUser`
      );
      const data = await response.json();

      if (data.user[0]._id) {
        setIsLoading(false);
        setUsers(data.user);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="padding-20">
      <h2>All Users</h2>

      {isLoading && <Spinner />}

      {!isLoading && users[0]._id && (
        <>
          {users.map((user) => (
            <UserItem key={user._id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};

export default AllUsers;
