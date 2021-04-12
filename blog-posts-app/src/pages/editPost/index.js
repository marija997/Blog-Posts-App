import { useLocation, Redirect } from "react-router";
import EditPost from "./editPost";

const EditPostData = () => {
  const location = useLocation();
  let post = location?.state?.post;

  if (post) return <EditPost location={location} post={post} />;
  return <Redirect to={`/`} />;
};

export default EditPostData;
