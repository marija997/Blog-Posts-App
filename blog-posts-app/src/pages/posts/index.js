import React, { useState, useEffect } from "react";
import { getPosts } from "../../API/posts/getPosts";
import Posts from "./posts";
import PostsSkeleton from "./skeleton";

const PostsData = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPosts(setLoading, setPosts);
  }, []);

  if (loading) return <PostsSkeleton />;
  return <Posts posts={posts} />;
};

export default PostsData;
