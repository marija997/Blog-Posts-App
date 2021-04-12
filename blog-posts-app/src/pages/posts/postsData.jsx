import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { getPosts } from "../../API/posts/getPosts";
import Posts from "./posts";

const PostsData = ({
  posts,
  setPosts,
  currentPage,
  setCurrentPage,
  hasMoreData,
  setHasMoreData,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      getPosts(
        posts,
        setLoading,
        setPosts,
        dispatch,
        currentPage,
        setHasMoreData
      );
    return () => {
      isMounted = false;
    };
  }, [currentPage, dispatch, posts, setHasMoreData, setPosts]);
  if (loading)
    return (
      <Loader
        type={"Rings"}
        color={"#f3745b"}
        height={100}
        width={100}
        timeout={3000}
      />
    );
  return (
    <Posts
      posts={posts}
      setPosts={setPosts}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      hasMoreData={hasMoreData}
      setHasMoreData={setHasMoreData}
    />
  );
};

export default PostsData;
