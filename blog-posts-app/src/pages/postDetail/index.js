import { useLocation } from "react-router";
import AdditionalDataFetching from "./additionalDataFetching";
import PostDataFetching from "./postDataFetching";

const PostData = () => {
  const location = useLocation();
  let post = location?.state?.post;

  if (post !== undefined) {
    return <AdditionalDataFetching post={post} />;
  }

  return <PostDataFetching location={location} />;
};

export default PostData;
