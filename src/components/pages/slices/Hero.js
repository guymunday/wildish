import * as React from "react";
import styled from "styled-components";
import Image from "../../Image";

const HeroStyles = styled.section`
  padding: 100px 30px;
  .hero-inner {
    max-width: 450px;
    text-align: center;
    margin: auto;
  }
`;

export default function Hero({ input: { colour, copy, image } }) {
  return (
    <>
      <HeroStyles className={`${colour}`}>
        <div className="hero-inner">
          <Image image={image} />
          <div className="html" dangerouslySetInnerHTML={{ __html: copy }} />
        </div>
      </HeroStyles>
    </>
  );
}
