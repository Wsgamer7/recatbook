import React from "react";

import "./Story.css";
type StoryProps = {
  create_name: string;
  content: string;
  create_id: string;
};
const Story = (props: StoryProps) => {
  return (
    <div className="Story-container">
      <div className="Story-creatorName">{props.create_name}</div>
      <div className="Story-content">{props.content}</div>
    </div>
  );
};
export default Story;
