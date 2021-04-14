import React from "react";
import { graphql } from "gatsby";
import BlogPostMasonry from "../components/BlogPostsMasonry";
import DoubleScrollSection from "../components/homepage/DoubleScrollSection";
import Marquee from "../components/Marquee";
import DoubleScrollSectionMobile from "../components/homepage/DoubleScrollSectionMobile";

export default function IndexPage({ data }) {
  return (
    <>
      <DoubleScrollSection data={data?.sections} />
      <DoubleScrollSectionMobile data={data?.sections} />
      <Marquee />
      <Marquee right />
      <BlogPostMasonry />
    </>
  );
}

export const indexQuery = graphql`
  query HomeQuery {
    sections: wpCptPage(slug: { eq: "homepage" }) {
      homepage {
        picturesVideo {
          video
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
            }
          }
        }
        words: wordsScrollSections {
          section
        }
      }
    }
  }
`;
