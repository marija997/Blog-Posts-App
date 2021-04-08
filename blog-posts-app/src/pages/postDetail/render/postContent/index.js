import { Link } from "react-router-dom";

const PostContent = ({ post, user }) => {
  return (
    <div className={`post-content`}>
      <p className={`post-text`}>{post.body}</p>
      <div className={`user`}>
        <Link>
          <p>- {user.name}</p>
        </Link>
      </div>
    </div>
  );
};

export default PostContent;
