import React, { useState } from "react";

import Description from "../../components/UI/Description/Description";
import Title from "../../components/UI/Title/Title";
import InfoCard from "../../components/InfoCard/InfoCard";
import PageIntro from "../../components/UI/PageIntro/PageIntro";
import Modal from "../../components/UI/Modal/Modal";
import ProductCard from "./ProductCard/ProductCard";
import SmallFooter from "../../components/SmallFooter/SmallFooter";

import { productIntro, productDetails } from "../../data/productData";

import "./Products.scss";

const Products = () => {

  let [showProduct, setShowProduct] = useState(false);
  let [productData, setProductData] = useState({});


  const productDialog = (item) => {
    setShowProduct(true);
    setProductData(item);
  };

  return (
    <div className="products_container">
      <Modal show={showProduct} closed={() => setShowProduct(false)}>
        <ProductCard
          data={productData}
          closeCard={() => setShowProduct(false)}
        />
      </Modal>
      <PageIntro imageProp={productIntro.imageSrc} title={productIntro.title} />
      <Description content={productIntro.desc} />
      <div className="product__list">
        <Title title="Our Products" />
        <div className="product__list--data">
          {productDetails.map((item, index) => {
            return (
              <InfoCard
                image={item.imageSrc}
                title={item.title}
                content={item.description}
                key={index}
                clicked={() => productDialog(item)}
              />
            );
          })}
        </div>
      </div>
      <SmallFooter />
    </div>
  );
};

export default Products;
