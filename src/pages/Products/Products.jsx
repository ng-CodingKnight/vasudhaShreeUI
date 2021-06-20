import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ParallaxComponent from "../../components/Parallax/ParallaxComponent";

import { productIntro, productDetails } from "../../data/productData";

import "./Products.scss";
import Description from "../../components/UI/Description/Description";
import Title from "../../components/UI/Title/Title";
import InfoCard from "../../components/InfoCard/InfoCard";

const Products = () => {
  return (
    <div className="products_container">
      <Navbar isHomePage={false} />
      <ParallaxComponent
        image={productIntro.imageSrc}
        title={productIntro.title}
      />
      <Description content={productIntro.content} />
      <div className="product__list">
        <Title title="Our Products" />
        <div className="product__list--data">
          {productDetails.map((item, index) => {
            return (
              <InfoCard
                image={item.imageSrc}
                content={item.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
