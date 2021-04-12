import { Link } from "react-router-dom";

const PostContent = ({ post, user }) => {
  const title = post.title.replace(/\s+/g, "-");
  const editPostPath = `${title}_id-${post.id}`;
  const userTitle = user.username?.replace(/\s+/g, "-");
  const userPath = `${userTitle}_id-${user.id}`;
  return (
    <div>
      <div className={`post-content`}>
        <p className={`post-text`}>{post.body}</p>
        <div className={`user`}>
          <Link to={{ pathname: `/user/${userPath}`, state: { user: user } }}>
            <p>- {user.name}</p>
          </Link>
        </div>
        <div className={`actions`}>
          <Link
            to={{ pathname: `/edit/${editPostPath}`, state: { post: post } }}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
