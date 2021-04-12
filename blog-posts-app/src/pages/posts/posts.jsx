import { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../components/heading";
import PostItem from "./postItem";
import { getPosts } from "../../API/posts/getPosts";
import Loader from "react-loader-spinner";

const Posts = ({
  posts,
  setPosts,
  currentPage,
  setCurrentPage,
  hasMoreData,
  setHasMoreData,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const ref = useRef(null);

  const listener = useCallback(() => {
    if (ref !== null && ref.current !== null) {
      let offsetTop = ref.current.getBoundingClientRect().top;
      if (offsetTop < 773 && !loading) {
        setCurrentPage(currentPage + 1);
        getPosts(
          posts,
          setLoading,
          setPosts,
          dispatch,
          currentPage + 1,
          setHasMoreData
        );
      }
    }
  }, [
    ref,
    posts,
    currentPage,
    dispatch,
    setCurrentPage,
    loading,
    setHasMoreData,
    setPosts,
  ]);

  useEffect(() => {
    if (hasMoreData) {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  });

  return (
    <div className={"posts-container container"}>
      <Heading text={"Posts"} />
      {posts?.length > 0 ? (
        <div>
          <div className={`listing`}>
            {posts.map((post) => {
              return <PostItem key={`posts-listing-${post.id}`} post={post} />;
            })}
          </div>
          {hasMoreData ? (
            <div className={`loading-trigger`}>
              <p ref={ref}>Loading...</p>
              {loading && (
                <Loader
                  type={"Rings"}
                  color={"#f3745b"}
                  height={50}
                  width={50}
                  timeout={3000}
                />
              )}
            </div>
          ) : (
            <p className={`no-more-data`}>That's all folks!</p>
          )}
        </div>
      ) : (
        <p className={`no-posts`}>There are no posts available.</p>
      )}
    </div>
  );
};

export default Posts;
