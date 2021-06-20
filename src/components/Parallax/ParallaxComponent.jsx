import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "./ParallaxBanner/Parallaximg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ParallaxComponent.scss";

const ParallaxComponent = ({ image, title }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <ParallaxProvider>
      <Parallaximg imageprop={image} height="50vh">
        <div className="parallax_title">{title}</div>
      </Parallaximg>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
