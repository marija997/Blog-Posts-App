const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        showNotification: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case "HIDE_NOTIFICATION":
      return { showNotification: false };
    default:
      return false;
  }
};
export default notificationsReducer;
