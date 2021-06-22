import React from "react";
import "./PageIntro.scss";

const PageIntro = ({ imageProp, title }) => {
  return (
    <div className="page-intro">
      <img src={imageProp} alt="info" />
      <div className="page-intro__title">{title}</div>
    </div>
  );
};

export default PageIntro;
