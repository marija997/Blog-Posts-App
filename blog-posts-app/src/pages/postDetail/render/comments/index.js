import Comment from "./comment";

const Comments = ({ comments }) => {
  return (
    <div className={`comments-container`}>
      <div className={`comments-heading`}>
        <h2>Comments</h2>
      </div>
      {comments && comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <Comment
              key={`comments-list-item-${comment.id}`}
              comment={comment}
            />
          );
        })
      ) : (
        <p>There are no available comments for this post.</p>
      )}
    </div>
  );
};

export default Comments;
