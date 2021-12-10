import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "../Image"

const MobileViewStyles = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: 1;
  text-align: center;
  padding: 30px 0;
  @media (min-width: 769px) {
    display: none;
  }
  .mobile-intro-paragraph {
    max-width: 300px;
    margin: auto;
  }
`

const MobileViewCasestudies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 30px;
  padding: 30px;
  .mobile-casestudy-thumbnail {
    position: relative;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    .mobile-view-logo-casestudy {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 300px;
      object-fit: contain;
      height: auto;
      display: block;
      @media screen and (max-width: 600px) {
        max-width: 250px;
      }
    }
  }
`

const HeroVideo = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  height: 95vh;
  video,
  .mobile-view-image-casestudy {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default function MobileView({ data }) {
  console.log(data)
  return (
    <>
      <MobileViewStyles className="black">
        {data?.homepage?.picturesVideo?.wpVideo?.mediaItemUrl && (
          <div className="animation-iframe-container-mobile">
            <video
              title="Wildish & Co animation"
              src={data?.homepage?.picturesVideo?.wpVideo?.mediaItemUrl}
              loading="lazy"
              playsInline
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <div
          className="html mobile-intro-paragraph"
          dangerouslySetInnerHTML={{ __html: data?.homeMobile?.introParagraph }}
        />
        <MobileViewCasestudies>
          {data?.homepage?.cases.slice(0, 3).map((c, i) => {
            return (
              <Link key={i} to={`/case-studies/${c?.slug}`}>
                <div className="mobile-casestudy-thumbnail">
                  {c?.case_study?.heroVideoMobile ? (
                    <HeroVideo>
                      <video
                        src={c?.case_study?.heroVideoMobile?.mediaItemUrl}
                        loading="lazy"
                        playsInline
                        autoPlay
                        loop
                        muted
                      />
                    </HeroVideo>
                  ) : c?.case_study?.heroVideo ? (
                    <HeroVideo>
                      <video
                        src={c?.case_study?.heroVideo?.mediaItemUrl}
                        loading="lazy"
                        playsInline
                        autoPlay
                        loop
                        muted
                      />
                    </HeroVideo>
                  ) : (
                    <HeroVideo>
                      <Image
                        image={c?.case_study?.heroImage}
                        className="mobile-view-image-casestudy"
                      />
                    </HeroVideo>
                  )}
                  <Image
                    className="mobile-view-logo-casestudy"
                    image={c?.case_study?.heroLogo}
                  />
                </div>
              </Link>
            )
          })}
        </MobileViewCasestudies>
        {data?.homeMobile?.words?.map((w, i) => {
          return (
            <div
              key={i}
              className="html mobile-intro-paragraph"
              dangerouslySetInnerHTML={{
                __html: w?.words,
              }}
            />
          )
        })}
        <Link to={data?.homeMobile?.link?.linkUrl}>
          {data?.homeMobile?.link?.linkText} &rarr;
        </Link>
      </MobileViewStyles>
    </>
  )
}
