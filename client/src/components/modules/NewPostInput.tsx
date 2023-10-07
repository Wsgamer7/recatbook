import React, { useState } from "react";
import { post } from "../../utilities";
import { Story } from "../modules/SingleStory";
import { Comment } from "../modules/SingleComment";
import "./NewPostInput.css";

type NewPostInputProps = {
  defaultContent: string;
  onSubmit: (content: string) => void;
};
const NewPostInput = (props: NewPostInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };
  return (
    <div className="NewPostInput-container">
      <input
        type="text"
        placeholder={props.defaultContent}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button type="submit" onClick={handleSubmit} value="Submit" className="NewPostInput-submit">
        Submit
      </button>
    </div>
  );
};
type NewStoryProps = {
  addNewStory: (story: Story) => void;
};
const NewStory = (props: NewStoryProps) => {
  const addStory = (value: string) => {
    const body = { content: value };
    post("/api/story", body).then((story: Story) => props.addNewStory(story));
  };
  return <NewPostInput defaultContent="add your story here" onSubmit={addStory} />;
};

type NewCommentProps = {
  story_id: string;
  addNewComment: (comment: Comment) => void;
};

const NewComment = (props: NewCommentProps) => {
  const addComment = (value: string) => {
    const body = { content: value, story_id: props.story_id };
    post("/api/comment", body).then((comment: Comment) => props.addNewComment(comment));
  };
  return <NewPostInput defaultContent="add your comment here" onSubmit={addComment} />;
};

export { NewStory, NewComment };
