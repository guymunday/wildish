import * as React from "react"
import { Link } from "gatsby"
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
    display: flex;
    align-items: center;
    position: relative;
    .popup-close-container {
      text-align: center;
      button {
        background: transparent;
        outline: none;
        border: var(--black) 2px solid;
        color: var(--black);
        padding: 5px 10px;
        border-radius: 18px;
        margin: 0 10px;
        transition: 0.3s ease;
        :hover {
          background: var(--black);
          color: var(--white);
        }
      }
    }
    .popup-copy {
      max-width: 450px;
      margin: auto;
      text-align: center;
      h3 {
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

  return (
    <>
      <PopupStyles ref={popupRef}>
        <div className="popup-inner">
          <div className="popup-copy">
            <h3>
              <strong>
                This is an annoying popup to say we’re really glad you’re here.
              </strong>
            </h3>
            <p>
              Have a look through some of our{" "}
              <strong>
                <Link to="/case-studies" className="link">
                  favourite work
                </Link>
              </strong>{" "}
              and if you like what you see, or would like to know more, we’d
              love to hear from you.
            </p>
            <CalendlyButton alt />
            <div className="popup-close-container">
              <button className="popup-close" onClick={() => setPushed(false)}>
                Close &times;
              </button>
            </div>
          </div>
        </div>
      </PopupStyles>
    </>
  )
}
