import { Route, Switch } from "react-router-dom";
import Posts from "../pages/posts";
import PostDetail from "../pages/postDetail";
import CreateNewPost from "../pages/createNewPost";
import EditPost from "../pages/editPost";
import Users from "../pages/users";
import UserDetail from "../pages/userDetail";

const Routing = () => {
  return (
    <Switch>
      <Route path={`/`} exact component={Posts} />
      <Route path={`/post`} exact={false} component={PostDetail} />
      <Route path={`/create-new-post`} exact component={CreateNewPost} />
      <Route path={`/edit`} exact={false} component={EditPost} />
      <Route path={`/users`} exact component={Users} />
      <Route path={`/user`} exact={false} component={UserDetail} />
    </Switch>
  );
};

export default Routing;
