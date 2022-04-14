import React from "react";
import LifeStory1 from "../images/LifeStory1.svg";
import LifeStory2 from "../images/LifeStory2.svg";
import LifeStory3 from "../images/LifeStory3.svg";
import LifeStories from "./Card/LifeStories";
import PageTitle from "./Others/PageTitle";

const lifeStoriesList = [
  {
    image: LifeStory1,
    title:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "October 9, 2018"
  },
  {
    image: LifeStory2,
    title: "How long does a cup of coffee keep you awake?",
    description:
      "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
    date: "October 9, 2018"
  },
  {
    image: LifeStory3,
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "October 9, 2018"
  }
];
function StoryCard() {
  return (
    <>
      <PageTitle title="Behind the mugs, lifestyle stories" />
      <div className="storyCardCont">
        {lifeStoriesList.map((item, index) => {
          return <LifeStories key={index} {...item} />;
        })}
      </div>
      ;
    </>
  );
}

export default StoryCard;
