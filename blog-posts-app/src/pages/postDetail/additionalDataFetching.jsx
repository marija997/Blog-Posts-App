import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import PostDetail from "./render";
import { getPostComments } from "../../API/posts/getPostComments";
import { getUserById } from "../../API/users/getUserById";

const AdditionalDataFetching = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState({});
  const [user, setUser] = useState({});
  const postId = post.id;
  const userId = post.userId;
  useEffect(() => {
    if (postId) {
      getPostComments(postId, setLoading, setComments);
    }
    if (userId) {
      getUserById(userId, setLoading, setUser);
    }
  }, [postId, userId]);

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

  if (post) return <PostDetail post={post} comments={comments} user={user} />;
  return <p>Page not found</p>;
};
export default AdditionalDataFetching;
