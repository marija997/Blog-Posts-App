const postReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULATE_POSTS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
export default postReducer;
