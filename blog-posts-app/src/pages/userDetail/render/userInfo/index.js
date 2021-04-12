const UserInfo = ({ user }) => {
  return (
    <div className={`user-info`}>
      <div className={`item-inner`}>
        <div className={`left-side`}>
          <h2>{user.username}</h2>
        </div>
        <div className={`right-side`}>
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
    </div>
  );
};

export default UserInfo;
