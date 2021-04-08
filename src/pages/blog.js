import * as React from "react";
import { graphql, Link } from "gatsby";
import GlassesSvg from "../assets/svgs/glasses";
import styled from "styled-components";
import Image from "../components/Image";

const BlogHeader = styled.div`
  background: var(--black);
  width: 100%;
  padding: 30px;
  color: var(--white);
`;

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
    }
    .blog-title {
      margin: 20px 0;
      transition: 0.3s ease color;
    }
    .time-to-read {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
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
`;

export default function BlogPosts({ data }) {
  return (
    <>
      <BlogHeader>
        <Link to="/">
          This is too many words, I would like to leave &times;
        </Link>
      </BlogHeader>
      <MasonryWrapper>
        <Masonry>
          {data?.allWpPost?.edges.map((b, i) => (
            <div key={i} className="blog-post-thumb">
              <Link to={`/blog/${b?.node?.slug}`}>
                <Image image={b?.node?.featuredImage?.node} />
                <h3 className="blog-title">{b?.node?.title}</h3>
                <div
                  className="html"
                  dangerouslySetInnerHTML={{ __html: b?.node?.excerpt }}
                />
                <div className="time-to-read">
                  <div className="hands">A</div>
                  <div className="glasses">
                    <GlassesSvg /> <p>{b?.node?.blogSingle?.readTime} mins</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Masonry>
      </MasonryWrapper>
    </>
  );
}

export const BLOGS_QUERY = graphql`
  query BlogsQuery {
    allWpPost(sort: { fields: date, order: DESC }) {
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
