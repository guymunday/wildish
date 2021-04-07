import React from "react";
import { Link, graphql, navigate } from "gatsby";
import HeroSection from "../components/case-studies/HeroSection";
import SliceZone from "../components/case-studies/SliceZone";
import NextHeroSection from "../components/case-studies/NextHeroSection";

const Casestudy = ({ data, transitionStatus }) => {
  const [nextPage, setNextPage] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [goBack, setGoBack] = React.useState(false);

  React.useEffect(() => {
    console.log("HomePage", transitionStatus);
  }, [transitionStatus]);

  const handleScroll = () => {
    const scrolled = window.scrollY + window.innerHeight;
    const height = document.body.clientHeight;

    if (scrolled === height) {
      setNextPage(true);
    } else {
      setNextPage(false);
    }
  };

  const handleBackwardsScroll = () => {
    const scrolled = window.scrollY;

    if (scrolled > 400) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const handleNavigateBackwards = () => {
    const scrolled = window.scrollY;

    if (hasScrolled && scrolled === 0) {
      setGoBack(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("scroll", handleBackwardsScroll);
    document.addEventListener("scroll", handleNavigateBackwards);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleBackwardsScroll);
      document.removeEventListener("scroll", handleNavigateBackwards);
    };
  });

  React.useEffect(() => {
    if (nextPage && data?.nextProject) {
      const goToNextPage = setTimeout(() => {
        navigate(`/case-studies/${data?.nextProject?.slug}`);
      }, 3000);
      return () => clearTimeout(goToNextPage);
    }
  });

  // React.useEffect(() => {
  //   if (goBack) {
  //     navigate(-1);
  //   }
  // });

  return (
    <div>
      <HeroSection data={data?.project?.case_study} />
      <SliceZone slices={data?.project?.case_study?.pageContent} />
      <Link to="/">Home</Link>
      {data?.nextProject && (
        <>
          {/* <NextHeroSection data={data?.nextProject?.case_study} />
          <Link to={`/case-studies/${data?.nextProject?.slug}`}>Link</Link> */}
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
                placeholder: DOMINANT_COLOR
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
                placeholder: DOMINANT_COLOR
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
                      placeholder: DOMINANT_COLOR
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
            title
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
                    placeholder: DOMINANT_COLOR
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
                placeholder: DOMINANT_COLOR
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
                placeholder: DOMINANT_COLOR
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
                placeholder: DOMINANT_COLOR
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
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
        heroText
      }
    }
  }
`;
