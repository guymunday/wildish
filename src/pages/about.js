import React from "react"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import styled from "styled-components"

const AboutStyles = styled.section`
  padding: 60px 0;
  .about-page-section {
    padding: 30px;
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
      <AboutStyles className="black">
        {data?.sections?.homepage?.words?.slice(1).map((w, i) => {
          return (
            <div key={i} className="about-page-section">
              <div
                dangerouslySetInnerHTML={{ __html: w?.section }}
                className="html"
              />
            </div>
          )
        })}
      </AboutStyles>
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
