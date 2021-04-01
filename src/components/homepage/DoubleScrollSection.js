import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import fullLogo from "../../assets/images/wildish-logo-full.svg";
import HeroSection from "../case-studies/HeroSection";
import lobsterGif from "../../assets/images/Lobster_black.gif";

const HomepageSection = styled(motion.section)`
  position: sticky;
  bottom: 0;
  height: 100vh;
  position: relative;
  width: 50%;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  .homepage-words {
    height: 100%;
    width: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--yellow);
    position: relative;
    z-index: 1;
    &.homepage-words-hero {
      background: #fff;
    }
    &.homepage-images-hero {
      background: #000;
    }
    .homepage-logo {
      width: 80%;
    }
    .hompepage-words-copy {
      padding: 30px;
      max-width: 600px;
      margin: auto;
    }
  }
`;

export default function DoubleScrollSection({ data }) {
  console.log(data);
  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        <HomepageSection>
          <div className="homepage-words-hero homepage-words">
            <img
              className="homepage-logo"
              src={fullLogo}
              alt="Wildish & Co full logo"
            />
          </div>
          {data?.homepage?.words?.map((w, i) => {
            return (
              <div className="homepage-words">
                <div
                  className="hompepage-words-copy html"
                  dangerouslySetInnerHTML={{ __html: w?.section }}
                />
              </div>
            );
          })}
        </HomepageSection>
        <HomepageSection>
          <div className="homepage-words homepage-images-hero">
            <img
              className="homepage-logo"
              src={lobsterGif}
              alt="Wildish & Co gif"
              loading="lazy"
            />
          </div>
          {data?.homepage?.cases?.map((c, i) => {
            return (
              <Link
                key={i}
                to={`/case-studies/${c?.slug}`}
                className="homepage-words"
              >
                <HeroSection data={c?.case_study} />
              </Link>
            );
          })}
        </HomepageSection>
      </div>
    </>
  );
}
