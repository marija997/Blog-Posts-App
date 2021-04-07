import { config } from "../../config/config";

export const getPosts = async (setLoading, setPosts) => {
  setLoading(true);
  await fetch(`${config.API_Url}/posts?_limit=${config.responseLimit}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        setPosts(result);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        console.log("There has been an error, " + error);
      }
    );
};
