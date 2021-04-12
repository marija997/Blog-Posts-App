import { config } from "../../config/config";

export const editPost = async (data, postId, setLoading, dispatch) => {
  setLoading(true);
  await fetch(`${config.API_Url}/posts/${postId}`, {
    method: "PUT",
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
        dispatch({
          type: "SHOW_NOTIFICATION",
          payload: { message: "Post Successfully edited", type: "success" },
        });
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        dispatch({
          type: "SHOW_NOTIFICATION",
          payload: { message: "There has been an error", type: "error" },
        });
        console.log("There has been an error, " + error);
      }
    );
};
