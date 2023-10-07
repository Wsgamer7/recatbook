import React, { useEffect, useState } from "react";

import { SingleComment } from "./SingleComment";
import { SingleStory } from "./SingleStory";
import "./Card.css";
import { NewComment } from "./NewPostInput";
import { Story } from "../modules/SingleStory";
import { Comment } from "../modules/SingleComment";
import { get } from "../../utilities";

/**
 * @param story, story object
 * @param comments, a array of comment object
 * @param userId
 */

type CardProps = {
  story: Story;
  userId: string;
};
const Card = (props: CardProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentJSXs, setCommentJSXs] = useState<JSX.Element[] | null>(null);
  const story: Story = props.story;
  useEffect(() => {
    get("/api/comments", { story_id: story._id }).then((commentObjs: Comment[]) => {
      setComments(commentObjs);
    });
  }, []);
  const addNewComment = (comment: Comment) => {
    setComments([comment, ...comments]);
  };
  useEffect(() => {
    const haveComment = comments.length > 0;
    if (haveComment) {
      setCommentJSXs(
        comments.map((comment: Comment) => (
          <SingleComment
            create_id={comment.create_id}
            create_name={comment.create_name}
            content={comment.content}
          />
        ))
      );
    }
  }, [comments]);
  return (
    <div className="Card-container">
      <SingleStory
        create_id={story.create_id}
        create_name={story.create_name}
        content={story.content}
      />
      {props.userId && <NewComment addNewComment={addNewComment} story_id={props.story._id} />}
      {comments.length > 0 && <hr />}
      {commentJSXs}
    </div>
  );
};
export default Card;
