import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "../components/Image";

const CasestudyGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  .grid-item {
    width: 100%;
    height: 56.25vw / 2;
    overflow: hidden;
    position: relative;
    a {
      display: block;
      height: 100%;
      width: 100%;
      img,
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default function Casestudies({ data: { cases } }) {
  return (
    <>
      <div style={{ background: "#000", height: 100, width: "100%" }} />
      <CasestudyGrid>
        {cases?.edges?.map((c, i) => (
          <>
            <motion.div
              key={i}
              className="grid-item"
              layoutId={c?.node?.case_study?.heroImage?.sourceUrl}
            >
              <Link to={`/case-studies/${c?.node?.slug}`}>
                <Image
                  image={c?.node?.case_study?.heroImage}
                  style={{ height: "100%" }}
                />
              </Link>
            </motion.div>
          </>
        ))}
      </CasestudyGrid>
    </>
  );
}

export const caseQuery = graphql`
  query CasestudiesQuery {
    cases: allWpCaseStudy(sort: { order: ASC, fields: date }) {
      edges {
        node {
          title
          slug
          case_study {
            heroText
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
    }
  }
`;

// GatsbyImageSharpFluid_tracedSVG
