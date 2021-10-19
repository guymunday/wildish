import React from "react"
import { graphql } from "gatsby"
import BlogPostMasonry from "../components/BlogPostsMasonry"
import Marquee from "../components/Marquee"
import DoubleScrollSectionMobile from "../components/homepage/DoubleScrollSectionMobile"
import DoubleScrollSection from "../components/homepage/DoubleScrollSection"
import Seo from "gatsby-plugin-wpgraphql-seo"
import CallToAction from "../components/CallToAction"

export default function IndexPage({ data }) {
  return (
    <>
      <Seo post={data?.sections} />
      <DoubleScrollSection data={data?.sections} />
      <DoubleScrollSectionMobile data={data?.sections} />
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
