import React from "react";
import "./InfoCard.scss";

const InfoCard = ({ image, content }) => {
  return (
    <div className="info-container">
      <img src={image} alt="info" />
      <div className="info-container__title">{content}</div>
    </div>
  );
};

export default InfoCard;
