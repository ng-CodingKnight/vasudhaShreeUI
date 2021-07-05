import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import InfoSection from "../../components/InfoSection/InfoSection";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";


import { InfoDataOne, InfoDataThree, InfoDataTwo } from "../../data/InfoData";
import { sliderData } from "../../data/sliderData";
import { galleryData } from "../../data/galleryData";

const Home = () => {

  return (
    <Fragment>
      <Hero slides={sliderData} />
      <InfoSection data={InfoDataOne} animate="fade-left" />
      <InfoSection data={InfoDataTwo} animate="fade-right" />
      <InfoSection
        idValue="research"
        data={InfoDataThree}
        animate="fade-left"
      />
      <Gallery idValue="gallery" data={galleryData} title="Our Gallery" />
      <Footer />
    </Fragment>
  );
};

export default Home;
