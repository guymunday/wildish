import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import fullLogo from "../../assets/images/wildish-logo-full.svg";
import lobsterGif from "../../assets/images/Lobster_black.gif";
import { gsap } from "gsap";
import CrossfadeImage from "../CrossfadeImage";

const HomepageSection = styled.section`
  position: sticky;
  bottom: 0;
  height: 100vh;
  position: relative;
  width: 50%;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  transition: width 0.3s ease;
  will-change: width scroll-position;
  ::-webkit-scrollbar {
    display: none;
  }
  button.homepage-words {
    cursor: pointer;
    :hover {
      .casestudy-title {
        opacity: 1;
      }
    }
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
    outline: none;
    border: none;
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
    .casestudy-title {
      position: absolute;
      display: block;
      left: 0;
      bottom: 0;
      width: 100%;
      background: var(--black);
      color: var(--white);
      font-size: 1.2rem;
      padding: 10px 0;
      z-index: 2;
      opacity: 0;
      transition: 0.3s ease opacity;
    }
  }
`;

export default function DoubleScrollSection({ data }) {
  const wordsRef = React.useRef(null);
  const picturesRef = React.useRef(null);

  const animation = () => {
    let tl = gsap.timeline({ ease: "power1.in" });

    return tl
      .to(".homepage-left", {
        opacity: 0,
      })
      .to(wordsRef.current, {
        width: 0,
        duration: 0.6,
        ease: "power4.out",
      })
      .to(
        picturesRef.current,
        {
          width: "100%",
          duration: 0.6,
          ease: "power4.out",
        },
        "<"
      )
      .add(function () {}, "+=0.3");
  };

  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        <HomepageSection ref={wordsRef}>
          <div className="homepage-words-hero homepage-words homepage-left">
            <img
              className="homepage-logo"
              src={fullLogo}
              alt="Wildish & Co full logo"
            />
          </div>
          {data?.homepage?.words?.map((w, i) => {
            return (
              <div className="homepage-words homepage-left" key={i}>
                <div
                  className="hompepage-words-copy html"
                  dangerouslySetInnerHTML={{ __html: w?.section }}
                />
              </div>
            );
          })}
        </HomepageSection>
        <HomepageSection ref={picturesRef}>
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
              <button
                key={i}
                className={`homepage-words`}
                onClick={async () => {
                  await animation();
                  await navigate(`/case-studies/${c?.slug}`);
                }}
              >
                <CrossfadeImage initial image={c?.case_study?.heroImage} />
                <p className="casestudy-title">Case Study: {c?.title} &rarr;</p>
              </button>
            );
          })}
        </HomepageSection>
      </div>
    </>
  );
}
