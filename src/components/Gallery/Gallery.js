import React from "react";
import Title from "../UI/Title/Title";
import { GallerySection, GalleryImage, ImageWrapper } from "./styles";

const Gallery = ({ idValue, data, title }) => {
  return (
    <GallerySection id={idValue}>
      <Title title={title} />
      <ImageWrapper>
        {data.map((item, index) => {
          return <GalleryImage src={item.image} alt={item.title} key={index} />;
        })}
      </ImageWrapper>
    </GallerySection>
  );
};

export default Gallery;
