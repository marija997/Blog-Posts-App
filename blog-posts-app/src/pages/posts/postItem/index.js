const PostItem = ({ post }) => {
  return (
    <div className={`post-item`}>
      <div className={`left-side`}>
        <h2>{post.title}</h2>
      </div>
      <div className={`right-side`}>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostItem;
