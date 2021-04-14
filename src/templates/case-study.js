import React from "react";
import { graphql, navigate } from "gatsby";
import HeroSection from "../components/case-studies/HeroSection";
import SliceZone from "../components/case-studies/SliceZone";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Casestudy = ({ data }) => {
  React.useEffect(() => {
    console.log(document.height);
  });

  const scrollAni = () => {
    let tl = gsap.timeline();

    return tl
      .to(".brand-logo", {
        opacity: 0,
      })
      .to(
        "#next-project",
        {
          height: "100vh",
          duration: 0.5,
        },
        "<"
      )
      .to(window, {
        scrollTo: "#next-project",
        duration: 0.5,
      })
      .add(function () {}, "+=0.6");
  };

  return (
    <div>
      <HeroSection data={data?.project?.case_study} />
      <SliceZone slices={data?.project?.case_study?.pageContent} />
      {data?.nextProject && (
        <>
          <HeroSection
            data={data?.nextProject?.case_study}
            next
            id="next-project"
            style={{ cursor: "pointer" }}
            onClick={async () => {
              await scrollAni();
              await navigate(`/case-studies/${data?.nextProject?.slug}`);
            }}
          />
        </>
      )}
    </div>
  );
};

export default Casestudy;

export const CASE_STUDY_QUERY = graphql`
  query CaseQuery($slug: String!, $nextSlug: String!, $previousSlug: String!) {
    project: wpCaseStudy(slug: { eq: $slug }) {
      id
      slug
      title
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
        heroLogo {
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
        heroText
        pageContent {
          ... on WpCase_study_CaseStudy_PageContent_ResultsSection {
            fieldGroupName
            results {
              fieldGroupName
              number
              text
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
          ... on WpCase_study_CaseStudy_PageContent_Video {
            fieldGroupName
            videoFile {
              mediaItemUrl
            }
          }
          ... on WpCase_study_CaseStudy_PageContent_VideoSection {
            embedCode
            fieldGroupName
          }
          ... on WpCase_study_CaseStudy_PageContent_ContentSection {
            content
            fieldGroupName
          }
          ... on WpCase_study_CaseStudy_PageContent_ImageSection {
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
    nextProject: wpCaseStudy(slug: { eq: $nextSlug }) {
      id
      slug
      title
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
        heroLogo {
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
        heroText
      }
    }
    previousProject: wpCaseStudy(slug: { eq: $previousSlug }) {
      id
      slug
      title
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
        heroLogo {
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
        heroText
      }
    }
  }
`;
