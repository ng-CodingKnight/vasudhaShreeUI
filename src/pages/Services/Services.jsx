import React from 'react';
import PageIntro from '../../components/UI/PageIntro/PageIntro';
import Description from '../../components/UI/Description/Description';
import Title from '../../components/UI/Title/Title';
import InfoSection from '../../components/InfoSection/InfoSection';
import { ServicesIntro, serviceList } from '../../data/servicesData';
import './Services.scss';
import SmallFooter from '../../components/SmallFooter/SmallFooter';

const Services = () => {
    return (
        <div className="service-container">
            <PageIntro imageProp={ServicesIntro.imageSrc} title={ServicesIntro.title} />
            <Description content={ServicesIntro.desc} />
            <Title title='Services Offered By VasudhaShree' />
            <div className="service-container__list">
                {
                    serviceList.map(item => {
                        return <InfoSection data={item} animate={item.animate} />
                    })
                }
            </div>
            <SmallFooter />
        </div>
    )
}

export default Services
