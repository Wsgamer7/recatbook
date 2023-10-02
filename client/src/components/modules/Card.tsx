import React from "react";

import Comment from "./Comment";
import Story from "./Story";
import "./Card.css";

import { Comment_type, Story_type } from "../../../../type";
/**
 * @param story, story object
 * @param comments, a array of comment object
 * @param userId
 */
type CardProps = {
  story: Story_type;
  comments: Comment_type[];
  userId: string;
};
const Card = (props: CardProps) => {
  const story = props.story;
  const commentsArray2Component = (comments: Comment_type[]) => {
    return comments.map((comment: Comment_type) => (
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
    <div className="Card-container">
      <Story create_id={story.create_id} create_name={story.create_name} content={story.content} />
      {comment_components}
    </div>
  );
};
export default Card;
