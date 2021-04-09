import * as React from "react";
import { graphql } from "gatsby";
import SliceZone from "../components/pages/SliceZone";

export default function PageTemplate({ data }) {
  return <SliceZone slices={data?.page?.contentBlocks?.contentBlocks} />;
}

export const PAGE_QUERY = graphql`
  query PageQuery($slug: String!) {
    page: wpGqlPage(slug: { eq: $slug }) {
      title
      slug
      content
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
          ... on WpGql_page_Contentblocks_ContentBlocks_TwoColumnCopy {
            colour
            columnOne
            columnTwo
            fieldGroupName
          }
          ... on WpGql_page_Contentblocks_ContentBlocks_CopyAndButtons {
            colour
            copy
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
`;
