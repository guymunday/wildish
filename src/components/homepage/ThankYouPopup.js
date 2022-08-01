import React from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const StyledThankYouPopup = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  .thank__you__container {
    background: var(--yellow);
    padding: 50px;
  }
`

export default function ThankYouPopup() {
  return (
    <>
      <StyledThankYouPopup>
        <div className="thank__you__container">
          <h1>
            <strong>Thank you!</strong>
          </h1>
        </div>
      </StyledThankYouPopup>
    </>
  )
}
