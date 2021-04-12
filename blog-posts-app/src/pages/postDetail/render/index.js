import Heading from "../../../components/heading";
import Comments from "./comments";
import PostContent from "./postContent";

const PostDetail = ({ post, comments, user }) => {
  return (
    <div className={`post-detail container`}>
      <Heading text={post?.title} />
      <div className={`content`}>
        <PostContent post={post} user={user} />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default PostDetail;
