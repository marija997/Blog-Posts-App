import { Route, Switch } from "react-router-dom";
import Posts from "../pages/posts";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Posts} />
      </Switch>
    </>
  );
};

export default Routing;
