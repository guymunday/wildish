import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import CalendlyButton from "./CalendlyButton";

const PopupStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
  z-index: 99;
  .popup-inner {
    padding: 30px;
    min-height: 100%;
    overflow: scroll;
    background: var(--yellow);
    display: flex;
    align-items: center;
    .popup-copy {
      max-width: 450px;
      margin: auto;
      text-align: center;
    }
  }
`;

export default function AnnoyingPopup({ setPopupOpen }) {
  const popupRef = React.useRef(null);

  React.useEffect(() => {
    let tl = gsap.timeline({ duration: 0.1 });

    tl.fromTo(
      popupRef.current,
      {
        scale: 0.5,
      },
      { scale: 1.1 }
    ).to(popupRef.current, {
      scale: 1,
    });
  }, []);

  return (
    <>
      <PopupStyles ref={popupRef}>
        <div className="popup-inner">
          <div className="popup-copy">
            <h3>
              This is an annoying popup to say
              <br />
              we’re really glad you’re here.
            </h3>
            <p>
              Have a look through some of our favourite work and if you like
              what you see, or would like to know more, we’d love to hear from
              you.
            </p>
            <CalendlyButton alt />
            <button
              style={{ display: "block" }}
              onClick={() => setPopupOpen(false)}
            >
              Close &times;
            </button>
          </div>
        </div>
      </PopupStyles>
    </>
  );
}
