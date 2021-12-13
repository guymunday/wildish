import React from "react"
import styled from "styled-components"
import CalendlyButton from "../../../components/CalendlyButton"
import EmailButton from "../../EmailButton"

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
    &.above-services-footer__buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`

export default function AboveServiceFooter({ input }) {
  return (
    <>
      <AboveServiceFooterContainer>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: input?.above }}
        />
        <div className="above-services-footer__buttons">
          <CalendlyButton />
          <EmailButton />
        </div>
      </AboveServiceFooterContainer>
    </>
  )
}
