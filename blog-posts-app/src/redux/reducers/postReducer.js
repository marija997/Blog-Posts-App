import { AddPost } from "../actions/postActions";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};
export default postReducer;
