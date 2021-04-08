import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./config/routing";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header";

const App = () => {
  return (
    <Provider store={store}>
      <div className={`app`}>
        <Router>
          <Header />
          <Routing />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
