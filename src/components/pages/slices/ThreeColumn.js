import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThreeColumnsStyles = styled.section`
  padding: 100px 30px;
  .three-column-inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .column {
      flex: 1;
      padding: 30px;
      @media screen and (max-width: 480px) {
        padding: 0;
        &:not(:first-child) {
          padding: 60px 0 0 0;
        }
      }
    }
  }
`;

export default function ThreeColumn({
  input: { colour, columnOne, columnTwo, columnThree },
}) {
  const containerRef = React.useRef();

  React.useEffect(() => {
    gsap.from(".fade-in-column", {
      opacity: 0,
      yPercent: 100,
      scrollTrigger: containerRef.current,
      stagger: 0.2,
      duration: 0.3,
    });
  }, []);

  return (
    <>
      <ThreeColumnsStyles className={`${colour}`}>
        <div ref={containerRef} className="three-column-inner">
          <div
            className="html column fade-in-column"
            dangerouslySetInnerHTML={{ __html: columnOne }}
          />
          {columnTwo && (
            <div
              className="html column fade-in-column"
              dangerouslySetInnerHTML={{ __html: columnTwo }}
            />
          )}
          {columnThree && (
            <div
              className="html column fade-in-column"
              dangerouslySetInnerHTML={{ __html: columnThree }}
            />
          )}
        </div>
      </ThreeColumnsStyles>
    </>
  );
}
