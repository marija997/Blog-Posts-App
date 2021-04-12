import React, { useState } from "react";
import { useSelector } from "react-redux";
import Users from "./users";
import UsersData from "./usersData";

const UsersRedux = () => {
  //checking if there are users in our redux store
  const [users, setUsers] = useState(useSelector((state) => state.users.users));
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  //if users array in redux store, no unnecessary call are made to API, data if fetched from redux store
  if (users && users.length > 0)
    return (
      <Users
        users={users}
        setUsers={setUsers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasMoreData={hasMoreData}
        setHasMoreData={setHasMoreData}
      />
    );

  //if users array in redux store is empty, data is fetched from API
  return (
    <UsersData
      users={users}
      setUsers={setUsers}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      hasMoreData={hasMoreData}
      setHasMoreData={setHasMoreData}
    />
  );
};

export default UsersRedux;
