import React from "react";
import { Button } from "../UI/Button";
import { IoArrowForward } from "react-icons/io5";
import "./InfoCard.scss";

const InfoCard = ({ image, title, content, clicked }) => {
  return (
    <div className="info-container">
      <img src={image} alt="info" />
      <div className="info-container__content">
        <div className="info-container__content--title">{title}</div>
        <div className="info-container__content--description">{content}</div>
        <Button primary="true" onClick={clicked}>
          Learn More{" "}
          <i style={{ marginLeft: "0.5rem", textAlign: "center" }}>
            <IoArrowForward />
          </i>
        </Button>
      </div>
    </div>
  );
};

export default InfoCard;
