import React from "react";

import "./SingleStory.css";
type Story = {
  _id: string;
  create_name: string;
  content: string;
  create_id: string;
};
type StoryProps = {
  create_name: string;
  content: string;
  create_id: string;
};
const SingleStory = (props: StoryProps) => {
  return (
    <div className="Story-container">
      <div className="Story-creatorName">{props.create_name}</div>
      <div className="Story-content">{props.content}</div>
    </div>
  );
};
export { Story, SingleStory };
