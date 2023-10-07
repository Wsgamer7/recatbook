import React from "react";

import "./SingleComment.css";
type Comment = {
  create_name: string;
  content: string;
  create_id: string;
  story_id: string;
  _id: string;
};
type CommentProps = {
  create_id: string;
  create_name: string;
  content: string;
};
const SingleComment = (props: CommentProps) => {
  return (
    <div className="Comment-container">
      <div className="Comment-creatorName">{props.create_name}</div>
      <div className="Comment-content">{props.content}</div>
    </div>
  );
};
export { Comment, SingleComment };
