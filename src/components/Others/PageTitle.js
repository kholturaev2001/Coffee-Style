import React from "react";
import Line from "../../images/Line.svg";

function PageTitle(props) {
  const { title } = props;
  return (
    <div>
      <img src={Line} />
      <p className="pageTitle"> {title}</p>
      <img src={Line} />
    </div>
  );
}

export default PageTitle;
