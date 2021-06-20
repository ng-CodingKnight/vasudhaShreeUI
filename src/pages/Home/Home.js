import React, { Fragment, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/UI/Modal";
import InfoSection from "../../components/InfoSection/InfoSection";
import Gallery from "../../components/Gallery/Gallery";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/FormComponent/Form";

import { InfoDataOne, InfoDataThree, InfoDataTwo } from "../../data/InfoData";
import { sliderData } from "../../data/sliderData";
import { galleryData } from "../../data/galleryData";

const Home = () => {
  let [show, setShow] = useState(false);

  const openForm = () => {
    setShow(true);
  };

  const closeForm = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Navbar clicked={openForm} isHomePage={true} />
      <Modal show={show} closed={closeForm}>
        <Form closed={closeForm} />
      </Modal>
      <Hero idValue="home" slides={sliderData} />
      <InfoSection idValue="services" data={InfoDataOne} animate="fade-left" />
      <InfoSection idValue="products" data={InfoDataTwo} animate="fade-right" />
      <InfoSection
        idValue="research"
        data={InfoDataThree}
        animate="fade-left"
      />
      <Gallery idValue="gallery" data={galleryData} title="Our Gallery" />
      <About idValue="about" />
      <Footer />
    </Fragment>
  );
};

export default Home;
