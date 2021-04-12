import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { getUserById } from "../../API/users/getUserById";
import AdditionalDataFetching from "./additionalDataFetching";

const UserDataFetching = ({ location }) => {
  const path = location.pathname;

  let userId = path.slice(path.indexOf("_id-"), path.length);

  userId = userId.replace(/_id-/, "");

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userId) {
      getUserById(userId, setLoading, setUser);
    }
  }, [userId]);

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
  if (user) return <AdditionalDataFetching user={user} />;
  return <p>Page not found</p>;
};
export default UserDataFetching;
