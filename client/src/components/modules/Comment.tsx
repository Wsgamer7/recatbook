import React from "react";

type CommentProps = {
  create_id: string;
  create_name: string;
  content: string;
};
const Comment = (props: CommentProps) => {
  return (
    <div>
      <h2>{props.create_name}</h2>
      <div>{props.content}</div>
    </div>
  );
};
export default Comment;
