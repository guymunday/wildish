import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Image from "../components/Image"
import Marquee from "../components/Marquee"
import gsap from "gsap"
import Filter from "../components/case-studies/Filter"
import useQueryString from "../components/query-string/useQueryString"
import { Helmet } from "react-helmet"
import CallToAction from "../components/CallToAction"

const CasestudyGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  background: #000;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .grid-item {
    width: 100%;
    overflow: hidden;
    position: relative;
    a {
      display: block;
      height: 28.125vw;
      width: 100%;
      position: relative;
      @media (max-width: 768px) {
        height: 56.25vw;
      }
      img,
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
      .casestudy-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 200px;
        object-fit: contain;
        height: auto;
        display: block;
      }
      .casestudy-title {
        position: absolute;
        display: block;
        left: 0;
        bottom: 0;
        width: 100%;
        background: var(--black);
        color: var(--white);
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
    }
  }
`

const HeroVideo = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  height: 100%;
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

export default function Casestudies({ data: { cases, tags } }) {
  const [tagFilter, setTagFilter] = useQueryString("tagged", "all")

  const animation = async () => {
    return gsap.to(".grid-item", {
      opacity: 1,
      duration: 0.3,
      stagger: {
        each: 0.2,
      },
    })
  }

  const reverseAnimation = async () => {
    return gsap.to(".grid-item", {
      opacity: 0,
      duration: 0.2,
      stagger: {
        each: 0.1,
        from: "end",
      },
    })
  }

  React.useEffect(() => {
    gsap.from(".grid-item", {
      opacity: 0,
      duration: 0.3,
      stagger: {
        each: 0.2,
      },
    })
  }, [])

  const handleClick = async (filter) => {
    await reverseAnimation()
    await setTagFilter(filter)
    await animation()
  }

  return (
    <>
      <Helmet>
        <title>Case Studies | Wildish & Co.</title>
      </Helmet>
      <h1 className="element-invisible">Case Studies</h1>
      <div style={{ background: "#000", minHeight: "100vh", width: "100%" }}>
        <Filter
          tags={tags?.edges}
          tagFilter={tagFilter}
          handleClick={handleClick}
        />
        <CasestudyGrid>
          {cases?.edges?.map((c, i) => {
            const mappedFilter = c?.node?.tags?.nodes.map((t) => t?.name)
            if (mappedFilter.includes(tagFilter) || tagFilter === "all") {
              return (
                <>
                  <div key={i} className="grid-item">
                    <Link
                      className="nostyle"
                      to={`/case-studies/${c?.node?.slug}`}
                    >
                      {c?.node?.case_study?.heroVideo?.mediaItemUrl ? (
                        <HeroVideo>
                          <video
                            src={c?.node?.case_study?.heroVideo?.mediaItemUrl}
                            loop
                            muted
                            playsInline
                            autoPlay
                          />
                        </HeroVideo>
                      ) : (
                        <Image
                          image={c?.node?.case_study?.heroImage}
                          style={{ height: "100%" }}
                        />
                      )}
                      {c?.node?.case_study?.heroLogo?.localFile?.publicURL && (
                        <img
                          className="casestudy-logo"
                          src={
                            c?.node?.case_study?.heroLogo?.localFile?.publicURL
                          }
                          alt={c?.node?.title}
                        />
                      )}
                      <p className="casestudy-title">{c?.node?.title} &rarr;</p>
                    </Link>
                  </div>
                </>
              )
            }
          })}
        </CasestudyGrid>
      </div>
      <Marquee />
      <CallToAction />
    </>
  )
}

export const caseQuery = graphql`
  query CasestudiesQuery {
    tags: allWpTag {
      edges {
        node {
          slug
          name
          caseStudies {
            nodes {
              title
              slug
            }
          }
        }
      }
    }
    cases: allWpCaseStudy(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          slug
          tags {
            nodes {
              name
              slug
            }
          }
          case_study {
            heroText
            heroLogo {
              altText
              localFile {
                publicURL
              }
            }
            heroImage {
              altText
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    quality: 90
                    placeholder: BLURRED
                  )
                }
              }
            }
            heroVideo {
              mediaItemUrl
            }
            heroVideoMobile {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`
