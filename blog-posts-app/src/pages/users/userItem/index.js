import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const title = user.username.replace(/\s+/g, "-");
  const path = `${title}_id-${user.id}`;
  return (
    <div className={`user-item`}>
      <Link to={{ pathname: `user/${path}`, state: { user: user } }}>
        <div className={`user-heading`}>
          <h2>{user.username}</h2>
        </div>
      </Link>
      <div className={`info`}>
        <div className={`info-item`}>
          <p>Name:</p>
          <h4>{user.name}</h4>
        </div>
        <div className={`info-item`}>
          <p>Email:</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <div className={`info-item`}>
          <p>Phone:</p>
          <a href={`phone:${user.phone}`}>{user.phone}</a>
        </div>
        <div className={`info-item`}>
          <p>Website :</p>
          <a href={user.website} target={`__blank`}>
            {user.website}
          </a>
        </div>
        <div className={`info-item`}>
          <p>Address:</p>
          <p>
            {user.address.street}, {user.address.suite},
          </p>
          <p>
            {user.address.city},{user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
