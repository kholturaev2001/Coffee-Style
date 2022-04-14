import React from "react";
import MugCard from "./Others/MugCard";
import Pink from "../images/Pink.svg";
import Golden from "../images/Golden.svg";
import PageTitle from "./Others/PageTitle";

const mugCardList = [
  {
    image: Pink,
    name: "Pink Premium Ceramic",
    price: "$ 99.00 USD"
  },
  {
    image: Golden,
    name: "Golden Designers Mug",
    newPrice: "$ 50.00 USD",
    prevPrice: "$ 69.00 USD"
  }
];

function FeaturedMugs() {
  return (
    <>
      <PageTitle title="FEATURED MUGS" />
      <div className="featuredContainer">
        {
          mugCardList.map((item, index) => {
            return <MugCard key={index} {...item} />
          })
        }
        />
      </div>
    </>
  );
}

export default FeaturedMugs;
