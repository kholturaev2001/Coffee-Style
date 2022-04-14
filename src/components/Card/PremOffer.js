import React from "react";
import Offer from "../../images/OfferImg.svg";
import PageTitle from "../Others/PageTitle";
import style from "./Card.module.css";

function PremOffer() {
  return (
    <div>
      <PageTitle title="BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE" />
      <div className={style.offerContainer}>
        <div>
          <img src={Offer} className={style.offerImg} />
        </div>
        <div className={style.offerTwo}>
          <p className={style.date}>Premium Offer</p>
          <p className={style.offerTitle}>Get our Coffee Magazine</p>
          <p className={style.description}>
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <button className={style.offerBtn}>Start Shopping </button>
        </div>
      </div>
    </div>
  );
}

export default PremOffer;
