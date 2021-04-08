import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id={`header`}>
      <Link className={`header-link`} to={`/`}>
        <h3>Posts</h3>
      </Link>
      <Link className={`header-link`} to={`/users`}>
        <h3>Users</h3>
      </Link>
      <Link className={`header-link`} to={`/create-new-post`}>
        <h3>Create New Post +</h3>
      </Link>
    </header>
  );
};

export default Header;
