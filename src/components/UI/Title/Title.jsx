import React from "react";
import "./Title.scss";

const Title = ({ title }) => {
  return (
    <div className="title_container">
      <div className="title_container--content">{title}</div>
    </div>
  );
};

export default Title;
