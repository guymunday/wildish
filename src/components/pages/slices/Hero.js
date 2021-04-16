import * as React from "react";
import styled from "styled-components";
import Image from "../../Image";

const HeroStyles = styled.section`
  padding: 0 30px 100px 30px;
  .hero-inner {
    max-width: 550px;
    text-align: center;
    margin: auto;
    .html {
      max-width: 450px;
      margin: auto;
      h1 {
        font-size: 3rem;
        @media screen and (max-width: 600px) {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default function Hero({ input: { colour, copy, image, video } }) {
  console.log(video);
  return (
    <>
      <HeroStyles className={`${colour}`}>
        <div className="hero-inner">
          {video ? (
            <div className="square-iframe-container">
              <iframe title="animation" src={video} />
            </div>
          ) : (
            <Image image={image} />
          )}
          <div className="html" dangerouslySetInnerHTML={{ __html: copy }} />
        </div>
      </HeroStyles>
    </>
  );
}
