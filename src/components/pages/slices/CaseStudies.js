import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import Image from "../../Image"
import FadeIn from "../../FadeIn"

const StyledCaseStudies = styled.section`
  padding: 50px;
  text-align: center;
  .case__studies__copy {
    max-width: 400px;
    margin: 0 auto 50px;
  }
  .case__studies__carosel {
    display: flex;
    justify-content: space-between;
    button {
      flex: 1;
      background: none;
      outline: none;
      border: none;
      font-size: 3rem;
      padding: 5px;
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
    .case__study__container {
      display: block;
      width: 100%;
      max-width: 780px;
      .case__study {
        width: 100%;
        aspect-ratio: 16/9;
        p {
          display: block;
          width: 100%;
          background: #000;
          color: #fff;
        }
      }
    }
  }
`

export default function CaseStudies({ input }) {
  const [caseStudy, setCaseStudy] = React.useState(0)

  function animation() {
    gsap.from(".case__study", {
      opacity: 0,
      scale: 0.8,
    })
  }

  function handleLeftArrow() {
    if (caseStudy === 0) {
      setCaseStudy(input?.caseStudies.length - 1)
    } else {
      setCaseStudy(caseStudy - 1)
    }
  }

  function handleRightArrow() {
    if (caseStudy === input?.caseStudies.length - 1) {
      setCaseStudy(0)
    } else {
      setCaseStudy(caseStudy + 1)
    }
  }

  React.useEffect(() => {
    animation()
  }, [caseStudy])

  return (
    <>
      <FadeIn>
        <StyledCaseStudies className="yellow">
          <div className="case__studies__container">
            <div className="case__studies__copy">
              <div
                dangerouslySetInnerHTML={{ __html: input?.copy }}
                className="html"
              />
            </div>
          </div>
          <div className="case__studies__carosel">
            <button onClick={handleLeftArrow}>&larr;</button>
            {input?.caseStudies?.map((c, i) => {
              return (
                <React.Fragment key={i}>
                  {caseStudy === i && (
                    <Link
                      to={`/case-studies/${c?.slug}`}
                      className="case__study__container"
                    >
                      <div className="case__study">
                        <Image image={c?.case_study?.heroImage} />
                        <p>{c?.title} &rarr;</p>
                      </div>
                    </Link>
                  )}
                </React.Fragment>
              )
            })}
            <button onClick={handleRightArrow}>&rarr;</button>
          </div>
        </StyledCaseStudies>
      </FadeIn>
    </>
  )
}
