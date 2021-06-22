import React from "react";
import { Button } from "../../../components/UI/Button";
import { Card } from "../../../components/UI/Card";
import Title from "../../../components/UI/Title/Title";
import './ProductCard.scss';

const ProductCard = ({ data, closeCard }) => {
  const {imageSrc, ...rest} = data;

  const productData = Object.entries(rest);
  return (
    <div className="card-container">
      <Card reverse={false}>
        <div className="card-container--image">
          <img src={imageSrc} alt="product" />
        </div>
      <div className="card-container__content">
        <Title title={data.title} />
        <div className="card-container__content--data">
          {
            productData.map(([key, data], index) => {
              return (
              <div className="card-container__box" key={index}>
                <div className="card-container__box--key">{key} </div>
                <div className="card-container__box--data">{data}</div>
              </div>
              )
            })
          }
        </div>
        <Button primary="true" onClick={closeCard}>OK</Button>
      </div>
      </Card>
    </div>
  );
};

export default ProductCard;
