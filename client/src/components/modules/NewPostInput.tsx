import React, { useState } from "react";
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

const NewStory = () => {
  const addStory = (value: string) => {
    console.log(value + "have submit story");
  };
  return <NewPostInput defaultContent="add your story here" onSubmit={addStory} />;
};

const NewComment = () => {
  const addComment = (value: string) => {
    console.log(value + "have submit Comment");
  };
  return <NewPostInput defaultContent="add your comment here" onSubmit={addComment} />;
};

export { NewStory, NewComment };
