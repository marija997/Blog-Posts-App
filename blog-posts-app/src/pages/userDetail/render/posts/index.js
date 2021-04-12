import Post from "./post";

const Posts = ({ posts }) => {
  return (
    <div className={`user-posts-container`}>
      <div className={`posts-heading`}>
        <h2>Posts</h2>
      </div>

      <div className={`listing`}>
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return <Post key={`user-posts-list-item-${post.id}`} post={post} />;
          })
        ) : (
          <p>There are no available posts for this user.</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
