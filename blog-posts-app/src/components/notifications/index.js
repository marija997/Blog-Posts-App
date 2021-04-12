import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Notifications = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notifications);

  const hideNotification = useCallback(() => {
    return dispatch({ type: "HIDE_NOTIFICATION" });
  }, [dispatch]);

  useEffect(() => {
    if (notification.showNotification && notification.message) {
      setTimeout(hideNotification, 4000);
    }
  }, [notification, hideNotification]);

  if (notification.message)
    return (
      <div className={` notifications ${notification.type}`}>
        {notification.message}
      </div>
    );
  return <></>;
};
export default Notifications;
