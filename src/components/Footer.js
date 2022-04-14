import React from "react";
import FooterCard from "./Card/FooterCard";
import FooterLifeStyle from "./Card/FooterLifeStyle";

const footerCardList = [
  {
    title: "Menu",
    line1: "Home",
    line2: "Our Products",
    line3: "About",
    line4: "Contact",
    line5: "Styleguide"
  },
  {
    title: "Follow us",
    line1: "Facebook",
    line2: "Instagram",
    line3: "Pinterest",
    line4: "Twitter"
  },
  {
    title: "Contact us",
    line1: "We’re Always Happy to Help",
    email: "us@coffeestyle.io"
  }
];

function Footer() {
  return (
    <>
      <div className="footerDiv">
        <div className="footerDivCont">
          <p className="footerPageTitle">Sign up and get free coffee bags</p>
          <p className="coffeeUpdate">Coffee Updates</p>
          <span>
            <button className="customerBtn">customer @coffestyle.io</button>
            <button className="subBtn">subscribe</button>
          </span>
        </div>
      </div>
      <FooterLifeStyle />
      <div className="footerCardCont">
        {footerCardList.map((item, index) => {
          return <FooterCard key={index} {...item} />;
        })}
      </div>
    </>
  );
}

export default Footer;
