import React from "react";

import Comment from "./Comment";
import Story from "./Story";
/**
 * @param story, story object
 * @param comments, a array of comment object
 * @param userId
 */
const Card = (props) => {
  const story = props.story;
  const commentsArray2Component = (comments) => {
    return comments.map((comment) => (
      <div>
        <Comment
          create_id={comment.create_id}
          create_name={comment.create_name}
          content={comment.content}
        />
      </div>
    ));
  };
  const comment_components = commentsArray2Component(props.comments);
  return (
    <div>
      <Story create_id={story.create_id} create_name={story.create_name} content={story.content} />
      {comment_components}
    </div>
  );
};
export default Card;
