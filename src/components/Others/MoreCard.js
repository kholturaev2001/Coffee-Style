import React from "react";
import style from "./MugCard.module.css";

function MoreCard(props) {
  const { image, name, price, prevPrice, newPrice } = props;
  return (
    <div className={style.smallCardContainer}>
      <img src={image} />
      <p className={style.coffeeName}> {name}</p>
      <div>
        <span>{price}</span>
        <span className={style.newPrice}>{newPrice}</span>
        <span className={style.prevPrice}>{prevPrice}</span>
      </div>

      <p></p>
    </div>
  );
}

export default MoreCard;
