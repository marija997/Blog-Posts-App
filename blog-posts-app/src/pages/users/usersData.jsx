import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { getUsers } from "../../API/users/getUsers";
import Users from "./users";

const UsersData = ({
  users,
  setUsers,
  currentPage,
  setCurrentPage,
  hasMoreData,
  setHasMoreData,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      getUsers(
        users,
        setLoading,
        setUsers,
        dispatch,
        currentPage,
        setHasMoreData
      );
    return () => (isMounted = false);
  }, [currentPage, users, setUsers, dispatch, setLoading, setHasMoreData]);

  if (loading)
    return (
      <Loader
        type={"Rings"}
        color={"#f3745b"}
        height={100}
        width={100}
        timeout={3000}
      />
    );
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
};

export default UsersData;
