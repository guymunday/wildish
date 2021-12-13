import React from "react"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import styled from "styled-components"

const About = styled.div`
  padding: 60px 0;
  .about-inner {
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
    .services-span {
      background: var(--white);
      color: var(--black);
    }
  }
`

export default function AboutPage({ data }) {
  return (
    <>
      <Seo post={data?.sections} />
      <About className="black">
        {data?.sections?.homepage?.words?.slice(1).map((w, i) => {
          return (
            <div key={i} className="about-inner">
              <div
                dangerouslySetInnerHTML={{ __html: w?.section }}
                className="html"
              />
            </div>
          )
        })}
      </About>
    </>
  )
}

export const ABOUT_QUERY = graphql`
  query AboutQuery {
    sections: wpCptPage(slug: { eq: "homepage" }) {
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
      homepage {
        words: wordsScrollSections {
          section
          colour
        }
      }
    }
  }
`
