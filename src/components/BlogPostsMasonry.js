import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import GlassesSvg from "../assets/svgs/glasses";
import Image from "./Image";
import styled from "styled-components";

export const MasonryWrapper = styled.section`
  padding: 30px;
  background: var(--black);
  width: 100%;
`;

export const Masonry = styled.div`
  columns: 3 300px;
  column-gap: 70px;
  color: var(--white);
  max-width: 1100px;
  margin: auto;
  .blog-post-thumb {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    margin: 0 0 30px 0;
    display: inline-block;
    &:hover {
      .blog-title {
        color: var(--yellow);
      }
      :hover {
        .time-to-read-container {
          .time-to-read {
            width: 38%;
          }
        }
      }
    }
    .blog-title {
      margin: 20px 0;
      transition: 0.3s ease color;
    }
    .time-to-read-container {
      margin: 20px 0;
      height: 30px;
      width: 100%;
      position: relative;
      .time-to-read {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        transition: 1s ease width;
        .glasses {
          display: flex;
          flex-direction: column;
          align-items: center;
          svg {
            max-width: 2rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;

export default function BlogPostMasonry() {
  const blog = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }, limit: 6) {
        edges {
          node {
            title
            slug
            excerpt
            blogSingle {
              readTime
            }
            featuredImage {
              node {
                sourceUrl
                altText
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
  `);

  return (
    <MasonryWrapper>
      <Masonry>
        {blog?.allWpPost?.edges.map((b, i) => (
          <div key={i} className="blog-post-thumb">
            <Link to={`/blog/${b?.node?.slug}`} className="nostyle">
              <Image image={b?.node?.featuredImage?.node} />
              <h3 className="blog-title" style={{ margin: "20px 0" }}>
                {b?.node?.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: b?.node?.excerpt }} />
              <div className="time-to-read-container">
                <div className="time-to-read">
                  <div className="hands">A</div>
                  <div className="glasses">
                    <GlassesSvg /> <p>{b?.node?.blogSingle?.readTime} mins</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </MasonryWrapper>
  );
}
