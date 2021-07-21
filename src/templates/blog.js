import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { MasonryWrapper } from "../components/BlogPostsMasonry"
import Image from "../components/Image"
import GlassesSvg from "../components/GlassesSvg"
import DangerouslySetHtmlContent from "../components/DangerouslySetHtmlContent"
import Seo from "gatsby-plugin-wpgraphql-seo"

const BlogHeader = styled.div`
  width: 100%;
  padding: 130px 30px 0px 30px;
  .blog-header-inner {
    display: flex;
    max-width: 800px;
    justify-content: space-between;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      .read-time {
        display: none;
      }
    }
  }
`

const Title = styled.div`
  padding: 30px 30px 0 30px;
  h1 {
    max-width: 800px;
    margin: 0 auto 20px auto;
  }
`

const Html = styled.div`
  .html-inner {
    padding: 30px;
    * {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      max-width: 800px;
    }
    *:not(li) {
      margin: 0 auto 20px auto;
      &:last-child {
        margin: 0 auto;
      }
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`

const RecentPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 70px;
  max-width: 1100px;
  margin: auto;
  color: var(--white);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .blog-post-thumb {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    margin: 0 0 30px 0;
    display: inline-block;
    align-self: start;
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
`

export default function BlogPage({ data }) {
  return (
    <>
      <Seo post={data?.wpPost} />
      <BlogHeader className="glasses">
        <div className="blog-header-inner">
          <p className="read-time">
            Read time: {data?.wpPost?.blogSingle?.readTime} mins
          </p>
          <Link to="/">
            This is too many words, I would like to leave &times;
          </Link>
        </div>
      </BlogHeader>
      <Title>
        <h1>{data?.wpPost?.title}</h1>
      </Title>
      <Html>
        <DangerouslySetHtmlContent
          className="html-inner white"
          html={data?.wpPost?.content}
        />
      </Html>
      <MasonryWrapper>
        <RecentPosts>
          {data?.recent?.edges.map((b, i) => (
            <div key={i} className="blog-post-thumb">
              <Link className="nostyle" to={`/blog/${b?.node?.slug}`}>
                <div className="">
                  <Image image={b?.node?.featuredImage?.node} />
                </div>
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
        </RecentPosts>
      </MasonryWrapper>
    </>
  )
}

export const BLOG_QUERY = graphql`
  query BlogQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      content
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      blogSingle {
        readTime
      }
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
`
