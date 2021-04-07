import * as React from "react";
import styled, { Keyframe } from "styled-components";

const MarqueeStyles = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  background: #000;
  color: #fff;
  .marquee-track {
    display: flex;
  }
`;

export default function Marquee() {
  const words = {
    words: (
      <>
        Follow us <span>🙏 </span>{" "}
        <span style={{ color: "var(--yellow)" }}>wildishandco_studio</span>
      </>
    ),
  };

  return (
    <>
      <MarqueeStyles>
        <div className="marquee-track">
          {Array.from({ length: 50 }, () => words).map((words, i) => (
            <p key={i} style={{ margin: "0 10px" }}>
              {words.words}
            </p>
          ))}
        </div>
      </MarqueeStyles>
    </>
  );
}
