import { config } from "../../config/config";

export const getPostById = async (postId, setLoading, setPost) => {
  setLoading(true);
  await fetch(`${config.API_Url}/posts/${postId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        setPost(result);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        console.log("There has been an error, " + error);
      }
    );
};
