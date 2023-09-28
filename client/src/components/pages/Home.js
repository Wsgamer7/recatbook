import React from "react";

import Card from "../modules/Card";
const story1 = {
  create_id: "0",
  create_name: "wzy",
  content: "渣男",
};
const story2 = {
  create_id: "1",
  create_name: "ws",
  content: "已婚",
};

const comment1 = {
  create_id: "1",
  create_name: "lyf",
  content: "1",
};
const comment2 = {
  create_id: "2",
  create_name: "lyf",
  content: "5",
};
const Home = () => {
  return (
    <div>
      <Card story={story1} comments={[comment1, comment2]} />
      <Card story={story2} comments={[comment1]} />
    </div>
  );
};
export default Home;
