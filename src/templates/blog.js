import * as React from "react";
import { graphql } from "gatsby";
import SanitisedHtml from "../components/case-studies/slices/SanitisedHtml";

export default function BlogPage({ data }) {
  console.log(data);

  return (
    <>
      <div style={{ maxWidth: 600 }}>
        <div>{data?.wpPost?.title}</div>
        <div
          className="html"
          dangerouslySetInnerHTML={{ __html: data?.wpPost?.content }}
        />
      </div>
    </>
  );
}

export const BLOG_QUERY = graphql`
  query BlogQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      content
    }
    recent: allWpPost(
      filter: { slug: { ne: $slug } }
      sort: { fields: date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          excerpt
          slug
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
