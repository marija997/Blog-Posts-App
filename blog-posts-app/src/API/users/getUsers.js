import { config } from "../../config/config";

export const getUsers = async (
  users,
  setLoading,
  setUsers,
  dispatch,
  page,
  setHasMoreData
) => {
  setLoading(true);
  await fetch(
    `${config.API_Url}/users?_page=${page}&_limit=${config.responseLimit}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(
      (result) => {
        if (result.length > 0) {
          if (users !== undefined) {
            setUsers([...users, ...result]);
            setLoading(false);
            dispatch({
              type: "POPULATE_USERS",
              payload: [...users, ...result],
            });
          } else {
            setUsers(result);
            setLoading(false);
            dispatch({ type: "POPULATE_USERS", payload: result });
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
