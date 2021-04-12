import Heading from "../../../components/heading";
import Posts from "./posts";
import UserInfo from "./userInfo";

const UserDetail = ({ user, posts }) => {
  return (
    <div className={`user-detail container`}>
      <Heading text={user?.name} />
      <div className={`content`}>
        <UserInfo user={user} />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default UserDetail;
