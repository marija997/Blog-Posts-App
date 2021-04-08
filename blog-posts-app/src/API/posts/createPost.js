import { config } from "../../config/config";

export const createPost = async (data, setLoading) => {
  setLoading(true);
  await fetch(`${config.API_Url}/posts/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: data.title,
      body: data.content,
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        console.log("There has been an error, " + error);
      }
    );
};
