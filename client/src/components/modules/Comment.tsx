import React from "react";

import "./Comment.css";
type CommentProps = {
  create_id: string;
  create_name: string;
  content: string;
};
const Comment = (props: CommentProps) => {
  return (
    <div className="Comment-container">
      <div className="Comment-creatorName">{props.create_name}</div>
      <div className="Comment-content">{props.content}</div>
    </div>
  );
};
export default Comment;
