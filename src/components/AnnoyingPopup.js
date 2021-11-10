import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import CalendlyButton from "./CalendlyButton"

const animationMobile = keyframes`
  0%   {transform: translate(-50%, 0) scale(0.3)}
  100% {transform: translate(-50%, 0) scale(1)}
`

const animation = keyframes`
  0%   {transform: scale(0.3)}
  100% {transform: scale(1)}
`

const PopupStyles = styled.div`
  position: fixed;
  left: 40px;
  bottom: 85px;
  max-width: 370px;
  padding: 30px;
  z-index: 99;
  width: 100%;
  animation: ${animation} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 768px) {
    left: 50%;
    bottom: 75px;
    padding: 15px;
    transform: translate(-50%, 0);
    animation: ${animationMobile} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .popup-inner {
    padding: 30px 20px;
    min-height: 100%;
    background: var(--yellow);
    position: relative;
    text-align: center;
    .popup-close-container {
      text-align: right;
      button {
        background: transparent;
        outline: none;
        border: none;
        padding: 0px;
        font-size: 50px;
        line-height: 0;
        margin: 0;
        cursor: pointer;
        transition: 0.3s ease;
        color: black;
        :active {
          transform: scale(0.8);
        }
      }
    }
    .popup-copy {
      max-width: 450px;
      margin: auto;
      text-align: center;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
        margin: 20px 0;
      }
    }
  }
`

export default function AnnoyingPopup({ setPushed }) {
  const data = useStaticQuery(graphql`
    {
      menu: wpCptPage(slug: { eq: "menu" }) {
        menu {
          buttonCopy {
            copy
          }
        }
      }
    }
  `)

  return (
    <>
      <PopupStyles>
        <div className="popup-inner">
          <div className="popup-close-container">
            <button className="popup-close" onClick={() => setPushed(false)}>
              ×
            </button>
          </div>
          <div
            className="popup-copy"
            dangerouslySetInnerHTML={{
              __html: data?.menu?.menu?.buttonCopy?.copy,
            }}
          />
          <CalendlyButton alt />
        </div>
      </PopupStyles>
    </>
  )
}
