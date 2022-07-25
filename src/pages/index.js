import React from "react"
import { graphql } from "gatsby"
import BlogPostMasonry from "../components/BlogPostsMasonry"
import Marquee from "../components/Marquee"
import DoubleScrollSection from "../components/homepage/DoubleScrollSection"
import Seo from "gatsby-plugin-wpgraphql-seo"
import CallToAction from "../components/CallToAction"
import MobileView from "../components/homepage/MobileView"

export default function IndexPage({ data }) {
  return (
    <>
      <Seo post={data?.sections} />
      <DoubleScrollSection data={data?.sections} />
      <MobileView data={data?.sections} />
      <Marquee />
      <BlogPostMasonry />
      <CallToAction />
    </>
  )
}

export const indexQuery = graphql`
  query HomeQuery {
    sections: wpCptPage(slug: { eq: "homepage" }) {
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      homeMobile {
        introParagraph
        link {
          linkText
          linkUrl
        }
        words {
          fieldGroupName
          words
        }
      }
      homepage {
        picturesVideo {
          wpVideo {
            mediaItemUrl
          }
          backupImage {
            altText
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        cases: imageScrollSections {
          ... on WpCase_study {
            id
            slug
            title
            case_study {
              heroText
              heroLogo {
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
              heroImage {
                altText
                sourceUrl
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
        words: wordsScrollSections {
          section
          colour
        }
      }
    }
  }
`
