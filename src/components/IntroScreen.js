import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import logo from "../assets/images/logo-ani.gif";
import Image from "./Image";

const IntroStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  .intro-gif {
    display: block;
    width: 30%;
  }
`;

export default function IntroScreen() {
  const [introOpen, setIntroOpen] = React.useState(true);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => resolve(image);
        loadImg.onerror = (err) => reject(err);
      });
    };

    loadImage(logo)
      .then(() => setImageLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  React.useEffect(() => {
    let tl = gsap.timeline();

    tl.to(ref.current, {
      delay: 1.8,
      duration: 0.3,
      autoAlpha: 0,
    }).then(() => setIntroOpen(false));
  }, []);

  return (
    <>
      {!imageLoaded && <IntroStyles />}
      {introOpen && imageLoaded && (
        <IntroStyles ref={ref}>
          <img src={logo} alt="" />
        </IntroStyles>
      )}
    </>
  );
}
