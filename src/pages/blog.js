import * as React from "react";
import { graphql, Link } from "gatsby";
import GlassesSvg from "../assets/svgs/glasses";
import styled from "styled-components";
import Image from "../components/Image";
import { MasonryWrapper, Masonry } from "../components/BlogPostsMasonry";

const BlogHeader = styled.div`
  background: var(--black);
  width: 100%;
  max-width: 1160px;
  margin: auto;
  padding: 0 30px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export default function BlogPosts({ data }) {
  return (
    <>
      <div
        style={{
          background: "var(--black)",
          width: "100%",
          padding: "120px 0 0 ",
        }}
      >
        <BlogHeader>
          <h1>Ideas</h1>
          <Link to="/">
            This is too many words, I would like to leave &times;
          </Link>
        </BlogHeader>
      </div>
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
