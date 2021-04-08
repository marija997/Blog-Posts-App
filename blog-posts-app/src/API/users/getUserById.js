import { config } from "../../config/config";

export const getUserById = async (userId, setLoading, setUser) => {
  setLoading(true);
  await fetch(`${config.API_Url}/users/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        setUser(result);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        console.log("There has been an error, " + error);
      }
    );
};
