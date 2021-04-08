import { config } from "../../config/config";

export const getPostComments = async (postId, setLoading, setComments) => {
  setLoading(true);
  await fetch(`${config.API_Url}/posts/${postId}/comments`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        setComments(result);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        console.log("There has been an error, " + error);
      }
    );
};
