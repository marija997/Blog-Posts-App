import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const title = post.title.replace(/\s+/g, "-");
  const path = `${title}_id-${post.id}`;
  return (
    <div className={`post-item`}>
      <Link to={{ pathname: `/post/${path}`, state: { post: post } }}>
        <div className={`item-inner`}>
          <div className={`left-side`}>
            <h2>{post.title}</h2>
          </div>
          <div className={`right-side`}>
            <p>{post.body}</p>
          </div>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Post;
