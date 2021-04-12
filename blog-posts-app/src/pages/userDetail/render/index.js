import { Helmet } from "react-helmet";
import Heading from "../../../components/heading";
import Posts from "./posts";
import UserInfo from "./userInfo";

const UserDetail = ({ user, posts }) => {
  const title = user.username.replace(/\s+/g, "-");
  const path = `${title}_id-${user.id}`;
  return (
    <div className={`user-detail container`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{user.name}</title>
        <link rel="canonical" href={`/user/${path}`} />
      </Helmet>
      <Heading text={user?.name} />
      <div className={`content`}>
        <UserInfo user={user} />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default UserDetail;
