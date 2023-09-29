import React from "react";

type StoryProps = {
  create_name: string;
  content: string;
  create_id: string;
};
const Story = (props: StoryProps) => {
  return (
    <div>
      <h2>{props.create_name}</h2>
      <div>{props.content}</div>
    </div>
  );
};
export default Story;
