import { Route, Switch } from "react-router-dom";
import Posts from "../pages/posts";
import PostDetail from "../pages/postDetail";
import CreateNewPost from "../pages/createNewPost";

const Routing = () => {
  return (
    <Switch>
      <Route path={`/`} exact component={Posts} />
      <Route path={`/post`} exact={false} component={PostDetail} />
      <Route path={`/create-new-post`} exact component={CreateNewPost} />
    </Switch>
  );
};

export default Routing;
