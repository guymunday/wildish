import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../../Image";
import Copy from "./Copy";

gsap.registerPlugin(ScrollTrigger);

const RollInStyles = styled.section`
  width: 100%;
  position: relative;
  .rollin-image {
    min-height: 100vh;
    display: flex;
    align-items: center;
    z-index: 0;
    position: relative;
  }
  .rollin-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: var(--white);
  }
`;

export default function RollIn({ alt, input: { image, text } }) {
  const containerRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const copyRef = React.useRef(null);

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });
    tl.from(copyRef.current, {
      yPercent: 100,
    });
  }, []);

  return (
    <>
      <RollInStyles ref={containerRef}>
        <div className="rollin-image" ref={imageRef}>
          {alt ? <Copy html={text} /> : <Image image={image} />}
        </div>
        <div className="rollin-copy" ref={copyRef}>
          {alt ? <Image image={image} /> : <Copy html={text} />}
        </div>
      </RollInStyles>
    </>
  );
}
