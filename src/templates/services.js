import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import CalendlyButton from "../components/CalendlyButton"

const LeftRightParagraphsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--yellow);
  padding: 150px 150px 0px 150px;
  @media (max-width: 1199px) {
    padding: 150px 120px 0px 120px;
  }
  @media (max-width: 768px) {
    padding: 150px 100px 0px 100px;
  }
  @media (max-width: 600px) {
    padding: 130px 30px 0px 30px;
  }

  > h1 {
    flex: 0 100%;
    margin-bottom: 50px;
    font-size: 4.75rem;
    @media (max-width: 1199px) {
      font-size: 4rem;
    }
    @media (max-width: 991px) {
      font-size: 3.75rem;
    }
    @media (max-width: 768px) {
      font-size: 3.3rem;
    }
    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2.7rem;
    line-height: 3rem;
    margin-bottom: 30px;
    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
    @media (max-width: 991px) {
      font-size: 2.2rem;
      line-height: 2.6rem;
    }
    @media (max-width: 768px) {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
  }

  p {
    margin-bottom: 20px;
  }

  > div {
    flex: 0 50%;
    padding-right: 50px;
    @media (max-width: 991px) {
      flex: 0 100%;
      padding-right: 0;
      margin-bottom: 20px;
    }
  }

  &.bottom {
    padding-top: 0;
    padding-bottom: 100px;
    @media (max-width: 1199px) {
      padding-bottom: 75px;
    }
    @media (max-width: 991px) {
      padding-bottom: 50px;
    }
    @media (max-width: 768px) {
      padding-bottom: 25px;
    }

    &.right {
      flex-direction: row-reverse;
    }
  }
`

const OurProcess = styled.section`
  background-color: var(--yellow);
  padding: 100px 150px 100px 150px;
  @media (max-width: 1199px) {
    padding: 50px 120px 100px 120px;
  }
  @media (max-width: 768px) {
    padding: 50px 100px 100px 100px;
  }
  @media (max-width: 600px) {
    padding: 30px 30px 100px 30px;
  }

  h2 {
    border-bottom: 2px solid black;
    padding-bottom: 50px;
    font-size: 3.2rem;
    @media (max-width: 1199px) {
      font-size: 2.8rem;
    }
    @media (max-width: 991px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  > div {
    flex: 0 50%;
  }
`

const Step = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  padding: 50px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }

  .number {
    font-size: 8.3rem;
    line-height: 1;
    @media (max-width: 1199px) {
      font-size: 7.5rem;
    }
    @media (max-width: 768px) {
      font-size: 6rem;
    }
    @media (max-width: 600px) {
      font-size: 5rem;
    }
  }

  > div {
    padding-right: 50px;

    p {
      margin-bottom: 15px;
    }
    h3 {
      font-size: 2.7rem;
      line-height: 3rem;
      margin-bottom: 15px;
      @media (max-width: 1199px) {
        font-size: 2.4rem;
        line-height: 2.8rem;
      }
      @media (max-width: 991px) {
        font-size: 2.2rem;
        line-height: 2.6rem;
      }
      @media (max-width: 768px) {
        font-size: 1.8rem;
        line-height: 2.2rem;
      }
    }
  }

  > * {
    flex: 0 50%;
    @media (max-width: 991px) {
      &:nth-child(1) {
        flex: 0 30%;
      }
      &:nth-child(2) {
        flex: 0 70%;
      }
    }
    @media (max-width: 991px) {
      &:nth-child(1) {
        flex: 0 100%;
        margin-bottom: 20px;
      }
      &:nth-child(2) {
        flex: 0 100%;
      }
    }
  }
`

const AboveServiceFooterContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  padding: 100px 150px;
  @media (max-width: 991px) {
    padding: 50px 120px 50px 120px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 50px 100px 50px 100px;
  }
  @media (max-width: 600px) {
    padding: 50px 30px 40px 30px;
  }

  > div {
    flex: 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 991px) {
      flex: 0 60%;
    }
    @media (max-width: 767px) {
      flex: 0 100%;
      text-align: center;
    }
    @media (max-width: 450px) {
      display: block;
    }
    a {
      border: 2px solid white;
      border-radius: 30px;
      background-image: none;
      padding: 12px 20px 8px 20px;
      margin: 0 10px;
      font-size: 1.8rem;
      line-height: 2rem;
      &:hover {
        background-color: var(--yellow);
        color: black;
        border-color: var(--yellow);
      }
      @media (max-width: 1199px) {
        font-size: 1.4rem;
        line-height: 1.5rem;
        margin: 0 5px;
      }
      @media (max-width: 991px) {
        font-size: 1.2rem;
        line-height: 1.3rem;
        padding: 10px 20px 8px 20px;
      }
      @media (max-width: 768px) {
        margin: 0 15px;
      }
      @media (max-width: 450px) {
        display: block;
        width: 100%;
        box-sizing: border-box;
        margin: 0 0 15px 0;
      }
    }
    &.content {
      @media (max-width: 991px) {
        flex: 0 40%;
      }
      @media (max-width: 767px) {
        flex: 0 100%;
        margin-bottom: 30px;
      }
      p {
        font-size: 2.4rem;
        line-height: 2.8rem;
        @media (max-width: 1199px) {
          font-size: 1.8rem;
          line-height: 2.2rem;
        }
        @media (max-width: 991px) {
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
      }
    }
    button {
      border: 2px solid white;
      font-size: 1.8rem;
      line-height: 2rem;
      width:240px;
      border-radius: 30px;
      padding:12px 20px 8px 20px;
      @media (max-width: 1199px) {
        font-size: 1.4rem;
        line-height: 1.5rem;
        margin: 0 5px;
        width: 200px;
      }
      @media (max-width: 991px) {
        font-size: 1.2rem;
        line-height: 1.3rem;
        padding: 10px 20px 8px 20px;
        width: 180px;
      }
      @media (max-width: 768px) {
        margin: 0 15px;
      }
      @media (max-width: 450px) {
        display: block;
        width: 100%;
        box-sizing: border-box;
        margin: 0 0 15px 0;
      }
    }
  }
`

export default function ServicePage({ data }) {
  return (
    <>
      <LeftRightParagraphsStyles>
        <h1>{data?.page?.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.page?.servicePages?.leftParagraph,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: data?.page?.servicePages?.rightParagraph,
          }}
        />
      </LeftRightParagraphsStyles>

      <OurProcess>
        <h2>Our process</h2>

        {data?.page?.servicePages?.process?.map((step, index) => {
          return (
            <>
              <Step>
                <p className="number">{step?.stepNumber}</p>
                <div dangerouslySetInnerHTML={{ __html: step?.stepContent }} />
              </Step>
            </>
          )
        })}
      </OurProcess>

      <LeftRightParagraphsStyles className="bottom">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.page?.servicePages?.aboveFooterLeft,
          }}
        />
      </LeftRightParagraphsStyles>

      <LeftRightParagraphsStyles className="bottom right">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.page?.servicePages?.aboveFooterRight,
          }}
        />
      </LeftRightParagraphsStyles>

      <AboveServiceFooterContainer>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: data?.page?.servicePages?.footerText,
          }}
        />
        <div>
            <CalendlyButton/> 
            <a href="mailto:hello@wildishandco.co.uk">Email us</a>
        </div>
      </AboveServiceFooterContainer>
    </>
  )
}

export const SERVICE_QUERY = graphql`
  query ServiceQuery($slug: String!) {
    page: wpServicePage(slug: { eq: $slug }) {
      title
      content
      servicePages {
        leftParagraph
        rightParagraph
        aboveFooterLeft
        aboveFooterRight
        footerText
        process {
          stepContent
          stepNumber
        }
      }
    }
  }
`
