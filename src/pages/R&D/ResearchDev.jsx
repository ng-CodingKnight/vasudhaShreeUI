import React from 'react';
import { rndIntro } from '../../data/r&dData';
import PageIntro from '../../components/UI/PageIntro/PageIntro';
import Title from '../../components/UI/Title/Title';
import Description from '../../components/UI/Description/Description';
import './ResearchDev.scss';
import SmallFooter from '../../components/SmallFooter/SmallFooter';

const ResearchDev = () => {
    return (
        <div className="rnd-container">
            <PageIntro imageProp={rndIntro.imageSrc} title={rndIntro.title} />
            <Description content={rndIntro.desc} />
            <Title title='Our R&D Work . . .' />
            <div className="rnd-container__work">
                <div className="item">
                    Solution for Plant Viral Diseases
                </div>
                <div className="item">
                    Agriculture Waste Management
                </div>
            </div>
            <Title title='Factory and Lab' />
            <div className="rnd-container__images">
                {
                    rndIntro.imageList.map((item, index) => {
                        return <img src={item} key={index} alt={`img-${index}`} />
                    })
                }
            </div>
            <SmallFooter />
        </div>
    )
}

export default ResearchDev
