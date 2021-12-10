export const INDEX_QUERY = `
  query HomeQuery {
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
        picturesVideo {
          wpVideo {
            mediaItemUrl
          }
          backupImage {
            altText
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        cases: imageScrollSections {
          ... on WpCase_study {
            id
            slug
            title
            case_study {
              heroText
              heroLogo {
                altText
                localFile {
                  publicURL
                }
              }
              heroImage {
                altText
                sourceUrl
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
              heroVideo {
                mediaItemUrl
              }
              heroVideoMobile {
                mediaItemUrl
              }
            }
          }
        }
        words: wordsScrollSections {
          section
          colour
        }
      }
    }
  }
`
