import React from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
// import fullLogo from "../../assets/images/wildish-logo-full.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../Image";
import ScrollSnap from "scroll-snap";

gsap.registerPlugin(ScrollTrigger);

const DoubleScrollStyles = styled.div`
  display: flex;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HomepageSection = styled.section`
  bottom: 0;
  height: 100vh;
  position: relative;
  width: 50%;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  will-change: width scroll-position;
  ::-webkit-scrollbar {
    display: none;
  }
  &.transition {
    transition: 0.3s ease width;
  }
  &:hover {
    width: 55%;
  }
  .homepage-words {
    height: 100%;
    width: 100%;
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
      width: 60%;
    }
    .hompepage-words-copy {
      padding: 30px;
      max-width: 550px;
      margin: 0 auto;
      text-align: center;
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
    :hover {
      .casestudy-title {
        opacity: 1;
      }
    }
    /* a {
      text-decoration: underline;
    } */
  }
`;

const Arrows = styled.div`
  position: absolute;
  bottom: 0px;
  right: 30px;
  height: 30px;
  z-index: 99;
  p {
    display: block;
    transform: rotate(90deg);
    transform-origin: 100% 0%;
  }
`;

export default function DoubleScrollSection({ data }) {
  const wordsRef = React.useRef(null);
  const picturesRef = React.useRef(null);

  function bindScrollSnapLeft() {
    const element = wordsRef.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      threshold: 0.6,
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

  const animation = () => {
    let tl = gsap.timeline({ ease: "power1.in" });

    return tl
      .to(".transition", {
        duration: 0.2,
        css: {
          transition: "0.1s ease all",
        },
      })
      .to(".homepage-left", {
        opacity: 0,
        duration: 0.3,
      })
      .to(
        ".casestudy-title",
        {
          opacity: 0,
          duration: 0.3,
        },
        "<"
      )
      .to(wordsRef.current, {
        width: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power4.out",
      })
      .to(
        picturesRef.current,
        {
          width: "100%",
          duration: 1.2,
          ease: "power4.out",
        },
        "<"
      )
      .add(function () {}, "+=0.3");
  };

  React.useEffect(() => {
    let fadein = gsap.utils.toArray(".fade-in");
    fadein.forEach((fade) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          scroller: wordsRef.current,
          trigger: fade,
          start: "top 50%",
        },
      });

      tl.from(fade, {
        opacity: 0,
      });
    });
  }, []);

  return (
    <>
      <DoubleScrollStyles>
        <HomepageSection ref={wordsRef} className="left-side transition">
          <Arrows>
            <p>About &rarr;</p>
          </Arrows>
          {/* <div className="homepage-words-hero homepage-words homepage-left">
            <img
              className="homepage-logo"
              src={fullLogo}
              alt="Wildish & Co full logo"
            />
          </div> */}
          {data?.homepage?.words?.map((w, i) => {
            return (
              <div
                className={`homepage-words homepage-left ${w?.colour}`}
                key={i}
              >
                <div>
                  {w?.animations ? (
                    <div className="animation-iframe-container">
                      <iframe
                        title="Wildish animation"
                        src={w?.animations}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <div
                    className="hompepage-words-copy html fade-in"
                    dangerouslySetInnerHTML={{ __html: w?.section }}
                  />
                </div>
              </div>
            );
          })}
        </HomepageSection>
        <HomepageSection ref={picturesRef} className="right-side transition">
          <Arrows style={{ color: "var(--white)" }}>
            <p>Showcase &rarr;</p>
          </Arrows>
          <div className="homepage-words homepage-images-hero">
            {data?.homepage?.picturesVideo?.video ? (
              <div className="square-iframe-container">
                <video
                  title="Wildish animation"
                  loading="eager"
                  src={data?.homepage?.picturesVideo?.video}
                  playsInline
                  autoPlay
                  loop
                  muted
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
                onClick={async (e) => {
                  e.preventDefault();
                  await animation();
                  await navigate(`/case-studies/${c?.slug}`);
                }}
              >
                <Image image={c?.case_study?.heroImage} />
                <p className="casestudy-title">{c?.title} &rarr;</p>
              </Link>
            );
          })}
        </HomepageSection>
      </DoubleScrollStyles>
    </>
  );
}
