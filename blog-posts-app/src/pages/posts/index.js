import React, { useState } from "react";
import { useSelector } from "react-redux";
import Posts from "./posts";
import PostsData from "./postsData";

const PostsRedux = () => {
  //checking if there are posts in our redux store
  const reduxPosts = useSelector((state) => state.posts?.posts);
  const [posts, setPosts] = useState(reduxPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  //if posts array in redux store, no unnecessary call are made to API, data if fetched from redux store
  if (posts && posts.length > 0)
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

  //if posts array in redux store is empty, data is fetched from API
  return (
    <PostsData
      posts={posts}
      setPosts={setPosts}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      hasMoreData={hasMoreData}
      setHasMoreData={setHasMoreData}
    />
  );
};

export default PostsRedux;
