import React from "react";
import PageTitle from "../components/Others/PageTitle";
import MoreCard from "./Others/MoreCard";
import Coffee1 from "../images/Coffe1.svg";
import Coffee2 from "../images/Coffe2.svg";
import Coffee3 from "../images/Coffe3.svg";
import Coffee4 from "../images/Coffe4.svg";
import Coffee5 from "../images/Coffe5.svg";
import Coffee6 from "../images/Coffe6.svg";
import Coffee7 from "../images/Coffe7.svg";
import Coffee8 from "../images/Coffe8.svg";
import Coffee9 from "../images/Coffe9.svg";

const moreCardList = [
  {
    image: Coffee1,
    name: "Red Love Cup",
    prevPrice: "$ 37.00 USD",
    newPrice: "$ 25.00 USD"
  },
  {
    image: Coffee2,
    name: "Black Tea Cup",
    newPrice: "$ 15.00 USD",
    prevPrice: "$ 29.00 USD"
  },
  {
    image: Coffee3,
    name: "B & N Essentials Mug",
    prevPrice: "$ 19.00 USD"
  },
  {
    image: Coffee9,
    name: "Winter Style Mug",
    price: "$ 25.00 USD"
  },
  {
    image: Coffee4,
    name: "Ceramic Tea",
    price: "$ 46.00 USD"
  },
  {
    image: Coffee5,
    name: "No Handle Bar Cup",
    price: "$ 34.00 USD"
  },
  {
    image: Coffee6,
    name: "Espresso Cup by Mugs.co",
    price: "$ 25.00 USD"
  },
  {
    image: Coffee7,
    name: "Pink Premium Ceramic",
    price: "$ 99.00 USD"
  },
  {
    image: Coffee8,
    name: "Red Love Cup",
    price: "$ 29.00 USD"
  }
];

function SmallCard() {
  return (
    <>
      <PageTitle title="MORE PRODUCTS" />
      <div className="smallCard">
        {moreCardList.map((item, index) => {
          return <MoreCard key={index} {...item} />;
        })}
      </div>
    </>
  );
}

export default SmallCard;
