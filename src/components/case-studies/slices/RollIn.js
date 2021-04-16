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
  @media screen and (max-width: 768px) {
    display: none;
  }
  .rollin-image {
    min-height: 100vh;
    display: flex;
    align-items: center;
    z-index: 0;
    position: relative;
    .alt-hover-image {
      position: absolute;
    }
  }
  .rollin-copy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: var(--white);
  }
`;

const RollInStylesMobile = styled.section`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    display: none;
  }
  .rollin-image {
    position: relative;
  }
  .rollin-copy {
    display: flex;
    align-items: center;
    z-index: 0;
    position: relative;
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
          {alt ? (
            <Copy html={text} />
          ) : (
            <Image image={image} className="alt-hover-image" />
          )}
        </div>
        <div className="rollin-copy" ref={copyRef}>
          {alt ? <Image image={image} /> : <Copy html={text} />}
        </div>
      </RollInStyles>
      <RollInStylesMobile>
        <div className="rollin-image">
          {alt ? <Copy html={text} /> : <Image image={image} />}
        </div>
        <div className="rollin-copy">
          {alt ? <Image image={image} /> : <Copy html={text} />}
        </div>
      </RollInStylesMobile>
    </>
  );
}
