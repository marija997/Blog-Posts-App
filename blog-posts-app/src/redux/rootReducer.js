import { combineReducers } from "redux";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";
import notificationsReducer from "./reducers/notificationsReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
