import React from 'react'
import PageIntro from '../../components/UI/PageIntro/PageIntro'
import Description from '../../components/UI/Description/Description';
import Title from '../../components/UI/Title/Title';
import InfoCard from '../../components/InfoCard/InfoCard';
import InfoSection from "../../components/InfoSection/InfoSection";
import SmallFooter from '../../components/SmallFooter/SmallFooter';

import { aboutIntro, visionaryData, mentorData, foundersData, teamData } from '../../data/aboutUsData'

import './AboutUs.scss';



const AboutUs = () => {

    return (
        <div className="about-container">
            <PageIntro title={aboutIntro.title} imageProp={aboutIntro.imageSrc} />
            <Description content={aboutIntro.content} />
            <div className="about-container__team">
                <Title title="Our Mentors and Team Members" />
                <Description content="The enterprise is promoted by technocrats having experience in similar agri-biotech industry." />
                <div className="about-container__team--vision">
                    <Title title={visionaryData.title} />
                    <Description content={visionaryData.content} />
                    <div className="about-container__team--images">
                        {visionaryData.images.map((item, index) => {
                            return (
                                <InfoCard image={item.imageSrc} title={item.title} />
                            )
                        })}
                    </div>
                </div>
                <div className="about-container__team--core">
                    <Title title='Our Mentor' />
                    <InfoSection data={mentorData} animate="fade-left" />
                    <Title title='Founders' />
                    <div className="about-container__team--images">
                        {foundersData.map((item, index) => {
                            return (
                                <InfoCard image={item.imageSrc} title={item.title} content={item.designation} />
                            )
                        })}
                    </div>
                    <div className="about-container__team--images">
                        {teamData.map((item, index) => {
                            return (
                                <InfoCard image={item.imageSrc} title={item.title} content={item.designation} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <SmallFooter />
        </div>
    )
}

export default AboutUs
