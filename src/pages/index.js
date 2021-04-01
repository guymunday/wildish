import React from "react";
import { graphql } from "gatsby";
import BlogPostMasonry from "../components/BlogPostsMasonry";
import { motion } from "framer-motion";
import styled from "styled-components";
import DoubleScrollSection from "../components/homepage/DoubleScrollSection";

const HomepageSection = styled(motion.section)`
  position: sticky;
  bottom: 0;
  height: 100vh;
  position: relative;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  div {
    height: 100%;
    width: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }
`;

export default function IndexPage({ data: { sections } }) {
  return (
    <>
      <DoubleScrollSection data={sections} />
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
                sourceUrl
                altText
              }
              heroImage {
                altText
                sourceUrl
                localFile {
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
