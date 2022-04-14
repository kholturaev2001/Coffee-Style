import React from "react";
import image from "../../images/CoffeeStyle.svg";
import style from "./Card.module.css";

function FooterLifeStyle() {
  return (
    <div className={style.footerLifeStyleDiv}>
      <img className={style.footerCoffeStyle} src={image} />
      <span>
        Delivering the best coffee life since 1996. From coffee geeks to the
        real ones.
      </span>
    </div>
  );
}

export default FooterLifeStyle;
