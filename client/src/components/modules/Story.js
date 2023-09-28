import React from "react";

/**
 * @param create_id, String
 * @param create_name, String
 * @param content, String
 */
const Story = (props) => {
  return (
    <div>
      <h2>{props.create_name}</h2>
      <div>{props.content}</div>
    </div>
  );
};
export default Story;
