import React, { useState, useEffect } from 'react';
import './App.css';
import GlobalStyles from './globalStyles';
import Form from './components/FormComponent/Form';
import Modal from './components/UI/Modal';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import { InfoDataOne, InfoDataThree, InfoDataTwo } from './data/InfoData';
import { sliderData } from './data/sliderData';
import Gallery from './components/Gallery/Gallery';


function App() {
  let [show, setShow] = useState(false);

  const openForm = () => {
    setShow(true);
  }

  const closeForm = () => {
    setShow(false);
  }

 

  return (
    <div>
      <GlobalStyles />
      <Navbar clicked={openForm}/>
      <Modal show={show} closed={closeForm}>
        <Form closed={closeForm}/>
      </Modal>
      <Hero idValue="home" slides={sliderData} />
      <InfoSection idValue="services" data={InfoDataOne}  animate="fade-left"/>
      <InfoSection idValue="products" data={InfoDataTwo} animate="fade-right"/>
      <InfoSection idValue="research" data={InfoDataThree} animate="fade-left"/>
      <Gallery idValue="gallery" />
      <About idValue="about"/>
      <Footer /> 
    </div>
  );
}

export default App;
