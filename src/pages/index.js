import React from "react";
import { graphql } from "gatsby";
import BlogPostMasonry from "../components/BlogPostsMasonry";
import DoubleScrollSection from "../components/homepage/DoubleScrollSection";
import Marquee from "../components/Marquee";

export default function IndexPage({ data }) {
  return (
    <>
      <DoubleScrollSection data={data.sections} />
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
                      placeholder: DOMINANT_COLOR
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
