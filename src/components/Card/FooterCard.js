import React from "react";
import style from "./Card.module.css";

function FooterCard(props) {
  const { line1, line2, line3, line4, line5, title, email } = props;
  return (
    <>
      <div className={style.footerCardDiv}>
        <p className={style.date}>{title}</p>
        <p className={style.underline}>{line1}</p>
        <p className={style.underline}>{line2}</p>
        <p className={style.underline}>{line3}</p>
        <p className={style.underline}>{line4}</p>
        <p className={style.underline}>{line5}</p>
        <p className={style.email}>{email}</p>
      </div>
    </>
  );
}

export default FooterCard;
