import React, { useState, useEffect } from "react";

import Card from "../modules/Card";
import { NewStory } from "../modules/NewPostInput";
import "./Home.css";
import { Story } from "../modules/SingleStory";
import { get } from "../../utilities";

type HomeProps = { userId: string };
const Home = (props: HomeProps) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [cards, setCards] = useState<JSX.Element[] | null>(null);

  //get all stories when render Home
  useEffect(() => {
    get("/api/stories").then((storyObjs: Story[]) => {
      setStories(storyObjs);
    });
  }, []);
  const addNewStory = (storyObj: Story) => {
    setStories([storyObj, ...stories]);
  };
  useEffect(() => {
    const haveStory = stories.length > 0;
    if (haveStory) {
      setCards(
        stories.map((story) => (
          <Card story={story} userId={props.userId} key={`Card_${story._id}`} />
        ))
      );
    } else {
      setCards([<div>No stories yet</div>]);
    }
  }, [stories, props.userId]);
  return (
    <div>
      <div className="Home-storyInputContainer">
        <NewStory addNewStory={addNewStory} />
      </div>
      {cards}
    </div>
  );
};
export default Home;
