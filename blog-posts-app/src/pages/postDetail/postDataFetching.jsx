import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { getPostById } from "../../API/posts/getPostById";
import AdditionalDataFetching from "./additionalDataFetching";

const PostDataFetching = ({ location }) => {
  const path = location.pathname;

  let postId = path.slice(path.indexOf("_id-"), path.length);

  postId = postId.replace(/_id-/, "");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    if (postId) {
      getPostById(postId, setLoading, setPost);
    }
  }, []);

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
  if (post) return <AdditionalDataFetching post={post} />;
  return <p>Page not found</p>;
};
export default PostDataFetching;
