import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./config/routing";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className={`app`}>
        <Router>
          <Routing />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
