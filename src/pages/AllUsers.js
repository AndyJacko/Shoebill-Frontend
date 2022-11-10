import React, { useEffect, useState } from "react";

import UserItem from "../Components/UserItem/UserItem";
import Spinner from "../Components/UI/Spinner/Spinner";

const AllUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        `https://cnmaster-shoebill.herokuapp.com/readUser`
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
    <>
      {isLoading && <Spinner />}

      {!isLoading && users[0]._id && (
        <>
          <h2>All Users</h2>
          {users.map((user) => (
            <UserItem key={user._id} user={user} />
          ))}
        </>
      )}
    </>
  );
};

export default AllUsers;
