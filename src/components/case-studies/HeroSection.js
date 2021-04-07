import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "../Image";

const HeroStyles = styled(motion.div)`
  width: 100%;
  height: ${(props) => (props.next ? "200px" : "100vh")};
  min-height: ${(props) => (props.next ? "white" : "500px")};
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
    .brand-logo {
      max-width: 300px;
      object-fit: contain;
      height: auto;
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
    <HeroStyles
      next={next}
      // layoutId={data?.heroImage?.localFile?.publicURL}
      transition={{ duration: 0.6 }}
      {...rest}
    >
      <Image image={data?.heroImage} />
      <div className="hero-inner">
        <img
          className="brand-logo"
          src={data?.heroLogo?.localFile?.publicURL}
          alt={data?.heroLogo?.alt}
        />
        <h2>{data?.heroText}</h2>
      </div>
    </HeroStyles>
  );
}
