import React from 'react';
import { sliderData } from '../../data/sliderData';
import Hero from '../../components/Hero/Hero';

const Home = () => {
    return (
        <Hero slides={sliderData} />
    )
}

export default Home
