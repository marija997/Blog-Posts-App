import { config } from "../../config/config";

export const getUserPosts = async (userId, setLoading, setPosts) => {
  setLoading(true);
  await fetch(`${config.API_Url}/posts?userId=${userId}`, {
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
