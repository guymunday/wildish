import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Image from "../components/Image";
import gsap from "gsap";

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
  React.useEffect(() => {
    gsap.from(".grid-item", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <div style={{ background: "#000", height: 100, width: "100%" }} />
      <CasestudyGrid>
        {cases?.edges?.map((c, i) => (
          <>
            <div key={i} className="grid-item">
              <Link to={`/case-studies/${c?.node?.slug}`}>
                <Image
                  image={c?.node?.case_study?.heroImage}
                  style={{ height: "100%" }}
                />
                <p></p>
              </Link>
            </div>
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
    }
  }
`;
