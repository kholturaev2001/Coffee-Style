import React from "react";
import style from "./MugCard.module.css";

function MugCard(props) {
  const { image, name, price, newPrice, prevPrice } = props;
  return (
    <div className={style.cardContainer}>
      <img src={image} />

      <p className={style.coffeeName}>{name}</p>
      <div>
        <span> {price} </span>
        <span className={style.newPrice}> {newPrice} </span>
        <span className={style.prevPrice}> {prevPrice} </span>
      </div>
    </div>
  );
}

export default MugCard;
