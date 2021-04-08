import Heading from "../../components/heading";
import PostItem from "./postItem";

const Posts = ({ posts }) => {
  return (
    <div className={"posts-container container"}>
      <Heading text={"Posts"} />
      {posts?.length > 0 ? (
        <div className={`listing`}>
          {posts.map((post) => {
            return <PostItem key={`posts-listing-${post.id}`} post={post} />;
          })}
        </div>
      ) : (
        <p>There are no post available.</p>
      )}
    </div>
  );
};

export default Posts;
