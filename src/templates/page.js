import * as React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/pages/SliceZone"
import Seo from "gatsby-plugin-wpgraphql-seo"

export default function PageTemplate({ data }) {
  return (
    <>
      <Seo post={data?.page} />
      {data?.page?.contentBlocks?.contentBlocks && (
        <SliceZone slices={data?.page?.contentBlocks?.contentBlocks} />
      )}
    </>
  )
}

export const PAGE_QUERY = graphql`
  query PageQuery($slug: String!) {
    page: wpGqlPage(slug: { eq: $slug }) {
      title
      slug
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
      contentBlocks {
        contentBlocks {
          ... on WpGql_page_Contentblocks_ContentBlocks_Hero {
            colour
            copy
            fieldGroupName
            video
            image {
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
          ... on WpGql_page_Contentblocks_ContentBlocks_ContactForm {
            copy
            fieldGroupName
            lobster {
              mediaItemUrl
            }
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_CaseStudies {
            copy
            fieldGroupName
            caseStudies {
              ... on WpCase_study {
                title
                slug
                case_study {
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
          ... on WpGql_page_Contentblocks_ContentBlocks_ProcessList {
            copy
            fieldGroupName
            list {
              copy
            }
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_ClientReviews {
            copy
            fieldGroupName
            reviews {
              copy
              clientLogo {
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
          ... on WpGql_page_Contentblocks_ContentBlocks_FourColumns {
            copy
            fieldGroupName
            columns {
              copy
            }
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_HoverImageBlocks {
            colour
            fieldGroupName
            title
            textHoverImage {
              text
              hoverImage {
                altText
                localFile {
                  publicURL
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_TwoColumnCopy {
            colour
            columnOne
            columnTwo
            fieldGroupName
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_Copy {
            colour
            copy
            fieldGroupName
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_CopyAndButtons {
            colour
            copy
            animation
            buttons {
              fieldGroupName
              button {
                buttonLabel
                caseStudyLink {
                  ... on WpCase_study {
                    id
                    slug
                  }
                }
              }
            }
            fieldGroupName
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_ThreeColumnCopy {
            colour
            columnOne
            columnThree
            columnTwo
            fieldGroupName
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_TwoParagraphBlock {
            fieldGroupName
            leftParagraph
            rightParagraph
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_ServiceList {
            fieldGroupName
            serviceList {
              fieldGroupName
              service {
                fieldGroupName
                serviceLink
                serviceText
                serviceImage {
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
          ... on WpGql_page_Contentblocks_ContentBlocks_AboveServiceFooter {
            fieldGroupName
            above
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_CopyAndImage {
            colour
            copy
            fieldGroupName
            image {
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
