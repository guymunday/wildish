import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "../Image"
import ScrollSnap from "scroll-snap"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const DoubleScrollStyles = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

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
    flex-direction: column;
    &.homepage-left {
      height: auto;
      min-height: 100%;
    }
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
      padding: 20px;
      max-width: 600px;
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
    .homepage-casestudy-logo {
      position: absolute;
      max-width: 200px;
      width: 100%;
    }
  }
  :hover {
    .casestudy-title {
      opacity: 1;
    }
  }
`

const HeroVideo = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  height: 100vh;
  background: var(--yellow);
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ToggleButton = styled.button`
  width: 50px;
  outline: none;
  border: none;
  z-index: 10;
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
`

export default function DoubleScrollSectionMobile({ data }) {
  const wordsRef = React.useRef(null)
  const picturesRef = React.useRef(null)
  const [isWords, setIsWords] = React.useState(true)
  // const [touchStart, setTouchStart] = React.useState(0)
  // const [touchEnd, setTouchEnd] = React.useState(0)

  function bindScrollSnapRight() {
    const element = picturesRef.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
      threshold: 0.5,
    })
    snapElement.bind()
  }

  React.useEffect(() => {
    bindScrollSnapRight()
  }, [])

  React.useEffect(() => {
    let fadein = gsap.utils.toArray(".fade-in-mobile")
    fadein.forEach((fade) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          scroller: wordsRef.current,
          trigger: fade,
          start: "top 50%",
        },
      })

      tl.from(fade, {
        opacity: 0,
        y: 50,
      })
    })
  }, [])

  // const handleTouchStart = (e) => {
  //   setTouchStart(e.targetTouches[0].clientX)
  // }

  // const handleTouchMove = (e) => {
  //   setTouchEnd(e.targetTouches[0].clientX)
  // }

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 150) {
  //     setIsWords(!isWords)
  //   }

  //   if (touchStart - touchEnd < -150) {
  //     setIsWords(!isWords)
  //   }
  // }

  return (
    <>
      <DoubleScrollStyles
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
      >
        <HomepageSection
          ref={wordsRef}
          style={{ width: isWords ? "100%" : "0%" }}
        >
          {data?.homepage?.words?.map((w, i) => {
            return (
              <div
                className={`homepage-words homepage-left ${w?.colour}`}
                key={i}
              >
                {w?.animations ? (
                  <div
                    className="animation-iframe-container-mobile"
                    style={{ marginBottom: -60 }}
                  >
                    <iframe
                      title="Wildish animation"
                      src={w?.animations}
                      loading="lazy"
                      playsInline
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                ) : null}
                <div
                  className="hompepage-words-copy html fade-in-mobile"
                  dangerouslySetInnerHTML={{ __html: w?.section }}
                />
              </div>
            )
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
            {isWords ? "Showcase ↑" : "About ↓"}
          </span>
        </ToggleButton>
        <HomepageSection
          ref={picturesRef}
          style={{ width: isWords ? "0%" : "100%" }}
        >
          <div className="homepage-words homepage-images-hero">
            {data?.homepage?.picturesVideo?.wpVideo?.mediaItemUrl ? (
              <div className="square-iframe-container">
                <video
                  title="Wildish animation"
                  src={data?.homepage?.picturesVideo?.wpVideo?.mediaItemUrl}
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
              >
                {c?.case_study?.heroVideo?.mediaItemUrl ? (
                  <HeroVideo>
                    <video
                      src={c?.case_study?.heroVideo?.mediaItemUrl}
                      loop
                      muted
                      playsInline
                      autoPlay
                    />
                  </HeroVideo>
                ) : (
                  <Image image={c?.case_study?.heroImage} />
                )}
                {c?.case_study?.heroLogo?.localFile?.publicURL && (
                  <img
                    className="homepage-casestudy-logo"
                    src={c?.case_study?.heroLogo?.localFile?.publicURL}
                    alt={c?.title}
                  />
                )}
                <p className="casestudy-title">{c?.title} &rarr;</p>
              </Link>
            )
          })}
        </HomepageSection>
      </DoubleScrollStyles>
    </>
  )
}
