import { useLocation } from "react-router";
import AdditionalDataFetching from "./additionalDataFetching";
import PostDataFetching from "./postDataFetching";

const PostData = () => {
  const location = useLocation();
  let post = location?.state?.post;

  if (post !== undefined) {
    return <AdditionalDataFetching post={post} />;
  }
  //in case the post data is not available via router link component, making sure the data is fetched from API endpoint
  return <PostDataFetching location={location} />;
};

export default PostData;
