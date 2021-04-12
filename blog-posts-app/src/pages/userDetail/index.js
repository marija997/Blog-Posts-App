import { useLocation } from "react-router";
import AdditionalDataFetching from "./additionalDataFetching";
import UserDataFetching from "./userDataFetching";

const UserData = () => {
  const location = useLocation();
  let user = location?.state?.user;

  if (user !== undefined) {
    return <AdditionalDataFetching user={user} />;
  }

  return <UserDataFetching location={location} />;
};

export default UserData;
