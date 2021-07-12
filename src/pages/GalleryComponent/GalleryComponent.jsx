import React from 'react';
import PageIntro from '../../components/UI/PageIntro/PageIntro';
import Description from '../../components/UI/Description/Description';
import Title from '../../components/UI/Title/Title';

import { galleryIntro, gallerySections } from '../../data/galleryData';

import './GalleryComponent.scss';
import SmallFooter from '../../components/SmallFooter/SmallFooter';

const GalleryComponent = () => {
    return (
        <div className="gallery-container">
            <PageIntro imageProp={galleryIntro.imageSrc} title={galleryIntro.title} />
            <Description content={galleryIntro.desc} />
            <Title title='Gallery' />
            {
                gallerySections.map(item => {
                    return (
                        <div className="gallery-container__item" key={item.id}>
                            <Title title={item.title} />
                            <div className="gallery-container__images">
                                {
                                    item.imageList.map((image, index) => {
                                        return <img src={image} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            <SmallFooter />
        </div>
    )
}

export default GalleryComponent
