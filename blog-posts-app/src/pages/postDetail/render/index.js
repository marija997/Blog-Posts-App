import { Helmet } from "react-helmet";
import Heading from "../../../components/heading";
import Comments from "./comments";
import PostContent from "./postContent";

const PostDetail = ({ post, comments, user }) => {
  const title = post.title.replace(/\s+/g, "-");
  const path = `${title}_id-${post.id}`;
  return (
    <div className={`post-detail container`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title}</title>
        <link rel="canonical" href={`https://localhost:3000/post/${path}`} />
      </Helmet>
      <Heading text={post?.title} />
      <div className={`content`}>
        <PostContent post={post} user={user} />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default PostDetail;
