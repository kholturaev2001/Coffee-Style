import React from "react";
import style from "./Card.module.css";

function LifeStories(props) {
  const { image, title, description, date } = props;
  return (
    <>
      <div className={style.lifeStoryCont}>
        <img src={image} />
        <p className={style.title}>{title}</p>
        <p className={style.description}>{description} </p>
        <p className={style.date}>{date}</p>
      </div>
    </>
  );
}

export default LifeStories;
