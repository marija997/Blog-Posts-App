import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import UserDetail from "./render";
import { getUserPosts } from "../../API/users/getUserPosts";

const AdditionalDataFetching = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({});
  const userId = user.id;

  useEffect(() => {
    if (userId) {
      getUserPosts(userId, setLoading, setPosts);
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

  if (user) return <UserDetail user={user} posts={posts} />;
  return <p>Page not found</p>;
};
export default AdditionalDataFetching;
