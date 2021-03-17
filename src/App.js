import React, { useState } from 'react';
import './App.css';
import GlobalStyles from './globalStyles';
import Form from './components/FormComponent/Form';
import Modal from './components/UI/Modal';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import { InfoDataOne, InfoDataTwo } from './data/InfoData';
import { sliderData } from './data/sliderData';


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
      <InfoSection idValue="services" data={InfoDataOne} />
      <InfoSection idValue="products" data={InfoDataTwo} />
      <About idValue="about"/>
      <Footer /> 
    </div>
  );
}

export default App;
