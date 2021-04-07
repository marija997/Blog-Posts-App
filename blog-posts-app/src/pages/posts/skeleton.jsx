import Skeleton from "react-loading-skeleton";

const PostsSkeleton = () => {
  return (
    <div>
      <Skeleton />
      <Skeleton count={5} />
    </div>
  );
};

export default PostsSkeleton;
