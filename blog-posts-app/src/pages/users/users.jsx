import { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../components/heading";
import PostItem from "./userItem";
import { getUsers } from "../../API/users/getUsers";
import Loader from "react-loader-spinner";

const Users = ({
  users,
  setUsers,
  currentPage,
  setCurrentPage,
  hasMoreData,
  setHasMoreData,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const ref = useRef(null);

  const listener = useCallback(() => {
    if (ref !== null && ref.current !== null) {
      let offsetTop = ref.current.getBoundingClientRect().top;
      if (offsetTop < 773 && !loading) {
        setCurrentPage(currentPage + 1);
        getUsers(
          users,
          setLoading,
          setUsers,
          dispatch,
          currentPage + 1,
          setHasMoreData
        );
      }
    }
  }, [
    ref,
    currentPage,
    users,
    setUsers,
    setLoading,
    dispatch,
    setHasMoreData,
    loading,
    setCurrentPage,
  ]);

  useEffect(() => {
    if (hasMoreData) {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  });

  return (
    <div className={"users-container container"}>
      <Heading text={"Users"} />
      {users?.length > 0 ? (
        <div>
          <div className={`listing`}>
            {users.map((user) => {
              return <PostItem key={`users-listing-${user.id}`} user={user} />;
            })}
          </div>
          {hasMoreData ? (
            <div className={`loading-trigger`}>
              <p ref={ref}>Loading...</p>
              {loading && (
                <Loader
                  type={"Rings"}
                  color={"#f3745b"}
                  height={50}
                  width={50}
                  timeout={3000}
                />
              )}
            </div>
          ) : (
            <p className={`no-more-data`}>That's all folks!</p>
          )}
        </div>
      ) : (
        <p className={`no-posts`}>There are no users available.</p>
      )}
    </div>
  );
};

export default Users;
