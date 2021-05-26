import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import logo from "../assets/images/logo-ani.gif";

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
  const ref = React.useRef(null);

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
      {introOpen && (
        <IntroStyles ref={ref}>
          <img className="intro-gif" src={logo} alt="" />
        </IntroStyles>
      )}
    </>
  );
}
