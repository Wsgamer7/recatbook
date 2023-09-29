import React from "react";

import Card from "../modules/Card";

type Story = {
  create_name: string;
  content: string;
  create_id: string;
};
type Comment = Story;

const story1: Story = {
  create_id: "0",
  create_name: "wzy",
  content: "渣男",
};
const story2: Story = {
  create_id: "1",
  create_name: "ws",
  content: "已婚",
};

const comment1: Comment = {
  create_id: "1",
  create_name: "lyf",
  content: "1",
};
const comment2: Comment = {
  create_id: "2",
  create_name: "lyf",
  content: "5",
};
const Home = () => {
  return (
    <div>
      <Card story={story1} comments={[comment1, comment2]} userId="0" />
      <Card story={story2} comments={[comment1]} userId="0" />
    </div>
  );
};
export default Home;
