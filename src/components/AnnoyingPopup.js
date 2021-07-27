import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gsap } from "gsap"
import CalendlyButton from "./CalendlyButton"

const PopupStyles = styled.div`
  position: fixed;
  left: 40px;
  bottom: 85px;
  max-width: 370px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 768px) {
    left: 0px;
    bottom: 75px;
    padding: 15px;
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
  const popupRef = React.useRef(null)

  React.useEffect(() => {
    let tl = gsap.timeline()

    tl.fromTo(
      popupRef.current,
      {
        scale: 0.5,
      },
      { duration: 0.4, scale: 1.1 }
    ).to(popupRef.current, {
      duration: 0.2,
      scale: 1,
    })
  }, [])

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
      <PopupStyles ref={popupRef}>
        <div className="popup-inner">
          <div className="popup-close-container">
            <button className="popup-close" onClick={() => setPushed(false)}>
              &times;
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
