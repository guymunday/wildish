import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import fullLogo from "../../assets/images/wildish-logo-full.svg";
import Image from "../Image";
import ScrollSnap from "scroll-snap";

const DoubleScrollStyles = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const HomepageSection = styled.section`
  bottom: 0;
  height: 100vh;
  position: relative;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  transition: width 0.3s ease;
  will-change: width scroll-position;
  ::-webkit-scrollbar {
    display: none;
  }
  &.homepage-left {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .homepage-words {
    height: 100%;
    width: 100%;
    height: -moz-available;
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    justify-content: center;
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
      text-align: center;
    }
  }
  :hover {
    .casestudy-title {
      opacity: 1;
    }
  }
`;

const ToggleButton = styled.button`
  width: 40px;
  outline: none;
  border: none;
  :active,
  :focus {
    outline: none;
  }
  .toggle-words {
    display: block;
    transform: rotate(90deg);
    white-space: nowrap;
    font-size: 1.4rem;
  }
`;

export default function DoubleScrollSectionMobile({ data }) {
  const wordsRef = React.useRef(null);
  const picturesRef = React.useRef(null);
  const [isWords, setIsWords] = React.useState(true);

  function bindScrollSnapLeft() {
    const element = wordsRef.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      threshold: 0.5,
    });
    snapElement.bind();
  }

  function bindScrollSnapRight() {
    const element = picturesRef.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      threshold: 0.5,
    });
    snapElement.bind();
  }

  React.useEffect(() => {
    bindScrollSnapLeft();
    bindScrollSnapRight();
  }, []);

  return (
    <>
      <DoubleScrollStyles>
        <HomepageSection
          ref={wordsRef}
          style={{ width: isWords ? "100%" : "0%" }}
        >
          <div className="homepage-words-hero homepage-words">
            <img
              className="homepage-logo"
              src={fullLogo}
              alt="Wildish & Co full logo"
            />
          </div>
          {data?.homepage?.words?.map((w, i) => {
            return (
              <div
                className={`homepage-words homepage-left ${w?.colour}`}
                key={i}
              >
                <div
                  className="hompepage-words-copy html"
                  dangerouslySetInnerHTML={{ __html: w?.section }}
                />
              </div>
            );
          })}
        </HomepageSection>
        <ToggleButton
          onClick={() => setIsWords(!isWords)}
          style={{ background: isWords ? "var(--black)" : "var(--white)" }}
        >
          <span
            className="toggle-words"
            style={{ color: !isWords ? "var(--black)" : "var(--white)" }}
          >
            {isWords ? "Pictures ↑" : "Words ↓"}
          </span>
        </ToggleButton>
        <HomepageSection
          ref={picturesRef}
          style={{ width: isWords ? "0%" : "100%" }}
        >
          <div className="homepage-words homepage-images-hero">
            {data?.homepage?.picturesVideo?.video ? (
              <div className="square-iframe-container">
                <iframe
                  title="Wildish animation"
                  src={data?.homepage?.picturesVideo?.video}
                />
              </div>
            ) : (
              <Image image={data?.homepage?.picturesVideo?.backupImage} />
            )}
          </div>
          {data?.homepage?.cases?.map((c, i) => {
            return (
              <Link
                to={`/case-studies/${c?.slug}`}
                key={i}
                className={`homepage-words`}
              >
                <Image image={c?.case_study?.heroImage} />
                <p className="casestudy-title">Case Study: {c?.title} &rarr;</p>
              </Link>
            );
          })}
        </HomepageSection>
      </DoubleScrollStyles>
    </>
  );
}
