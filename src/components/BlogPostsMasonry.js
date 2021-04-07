import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import GlassesSvg from "../assets/svgs/glasses";
import { MasonryWrapper, Masonry } from "../pages/blog";
import Image from "./Image";

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
            <Link to={`/blog/${b?.node?.slug}`}>
              <Image image={b?.node?.featuredImage?.node} />
              <h3 className="blog-title" style={{ margin: "20px 0" }}>
                {b?.node?.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: b?.node?.excerpt }} />
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
  );
}
