import { useState } from "react";

const Comment = ({ comment }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`comment`}>
      <h3 className={`comment-name`}>{comment.name}</h3>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
      <p className={`comment-text ${showMore && "show-more"}`}>
        {showMore ? comment.body : comment.body.slice(0, 55) + "..."}
      </p>
      <p onClick={handleClick} className={`trigger`}>
        {showMore ? "Show Less" : "Show More"}
      </p>
      <div className={`border`}></div>
    </div>
  );
};
export default Comment;
