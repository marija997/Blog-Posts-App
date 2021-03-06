import { config } from "../../config/config";

export const getPosts = async (
  posts,
  setLoading,
  setPosts,
  dispatch,
  page,
  setHasMoreData
) => {
  setLoading(true);
  await fetch(
    `${config.API_Url}/posts?_page=${page}&_limit=${config.responseLimit}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(
      (result) => {
        if (result.length > 0) {
          if (posts !== undefined) {
            setPosts([...posts, ...result]);
            setLoading(false);
            dispatch({
              type: "POPULATE_POSTS",
              payload: [...posts, ...result],
            });
          } else {
            setPosts(result);
            setLoading(false);
            dispatch({ type: "POPULATE_POSTS", payload: result });
          }
        }
        setLoading(false);
        if (result.length === 0) setHasMoreData(false);
      },
      (error) => {
        setLoading(false);
        console.log("There has been an error, " + error);
      }
    );
};
