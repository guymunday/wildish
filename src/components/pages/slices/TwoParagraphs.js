import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "@react-hook/media-query"

const TwoParagraphsStyles = styled.section`
  display: flex;
  padding: 150px 150px 0px 150px;
  @media (max-width: 1199px) {
    padding: 150px 120px 0px 120px;
  }
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    padding: 150px 100px 0px 100px;
  }
  @media (max-width: 600px) {
    padding: 130px 30px 0px 30px;
  }
  > div {
    flex: 1;
    padding-right: 50px;
    @media (max-width: 991px) {
      flex: 100%;
      padding-right: 0;
    }
    h1 {
      font-size: 3.15rem;
      line-height: 4rem;
      @media (max-width: 1199px) {
        font-size: 2.8rem;
        line-height: 3.6rem;
      }
      @media (max-width: 991px) {
        font-size: 2.5rem;
        line-height: 3rem;
      }
      @media (max-width: 768px) {
        font-size: 2.2rem;
        line-height: 2.7rem;
      }
    }
    h2 {
      font-size: 2.7rem;
      line-height: 3rem;
      margin-bottom: 30px;
      margin-top: 10px;
      @media (max-width: 1199px) {
        font-size: 2.4rem;
        line-height: 2.8rem;
        margin-top: 5px;
      }
      @media (max-width: 991px) {
        font-size: 2.2rem;
        line-height: 2.6rem;
        margin-top: 5px;
      }
      @media (max-width: 768px) {
        font-size: 1.8rem;
        line-height: 2.2rem;
      }
    }
  }
  .twoparagraphs-left {
    @media (max-width: 991px) {
      margin-bottom: 50px;
    }
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
`

export default function TwoParagraphs({ input }) {
  const matches = useMediaQuery("(max-width: 768px)")

  return (
    <>
      <TwoParagraphsStyles className={`${matches ? "black" : "yellow"}`}>
        <div
          className="twoparagraphs-left"
          dangerouslySetInnerHTML={{ __html: input?.leftParagraph }}
        />
        <div dangerouslySetInnerHTML={{ __html: input?.rightParagraph }} />
      </TwoParagraphsStyles>
    </>
  )
}
