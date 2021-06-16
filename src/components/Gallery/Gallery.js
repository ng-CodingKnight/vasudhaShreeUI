import React from 'react';
import {galleryData} from '../../data/galleryData';
import {GallerySection, GalleryTitle, GalleryImage, ImageWrapper} from './styles';

const Gallery = (props) => {
    return (
        <GallerySection id={props.idValue}>
            <GalleryTitle>Our Gallery</GalleryTitle>
            <ImageWrapper>
                {galleryData.map((item, index) => {
                    return (
                        <GalleryImage src={item.image} alt={item.title} key={index}/>
                    )
                })}
            </ImageWrapper>
        </GallerySection>
    )
}

export default Gallery
