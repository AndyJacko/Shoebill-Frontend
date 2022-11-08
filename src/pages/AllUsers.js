import React, { useEffect, useState } from "react";

import UserItem from "../Components/UserItem/UserItem";
import Spinner from "../Components/UI/Spinner/Spinner";

const AllUsers = () => {
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
    <>
      {isLoading && <Spinner />}

      {!isLoading && users[0].id && (
        <>
          <h2>All Users</h2>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </>
      )}
    </>
  );
};

export default AllUsers;
