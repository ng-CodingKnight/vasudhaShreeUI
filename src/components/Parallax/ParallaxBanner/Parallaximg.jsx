import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Parallaximg.scss";

const Parallaximg = (props) => {
  return (
    <ParallaxBanner
      layers={[{ image: props.imageprop, amount: 0.6 }]}
      style={{ height: props.height }}
    >
      <div className="parallax_content">{props.children}</div>
    </ParallaxBanner>
  );
};

export default Parallaximg;
