import React from "react";
import styled from "styled-components";
import Image from "../Image";
import nextHand from "../../assets/images/next-hand.gif";

const HeroStyles = styled.div`
  width: 100%;
  height: ${(props) => (props.next ? "300px" : "100vh")};
  min-height: ${(props) => (props.next ? "" : "500px")};
  overflow: hidden;
  position: relative;
  color: var(--white);
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .hero-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
      props.next ? "rgba(0, 0, 0, 0.3)" : "transparent"};
    .brand-logo {
      max-width: 300px;
      object-fit: contain;
      height: auto;
      display: block;
    }
    h2 {
      font-size: 2.5rem;
      text-align: center;
      max-width: 500px;
    }
  }
`;

export default function HeroSection({ data, next, ...rest }) {
  return (
    <HeroStyles next={next} {...rest}>
      <Image image={data?.heroImage} />
      <div className="hero-inner">
        {!next ? (
          <>
            <img
              className="brand-logo"
              src={data?.heroLogo?.localFile?.publicURL}
              alt={data?.heroLogo?.alt}
            />
            <h2>{data?.heroText}</h2>
          </>
        ) : (
          <h2 className="brand-logo">Next &darr;</h2>
        )}
      </div>
    </HeroStyles>
  );
}
