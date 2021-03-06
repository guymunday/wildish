import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: scroll;
  cursor: pointer;
  z-index: 99999999;
  .modal-inner {
    padding: 30px;
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`

export default function Modal({ children, ...rest }) {
  const [isBrowser, setIsBrowser] = React.useState(false)

  React.useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser) {
    return ReactDOM.createPortal(
      <StyledModalOverlay {...rest}>
        <div className="modal-inner">{children}</div>
      </StyledModalOverlay>,
      document.getElementById("portal")
    )
  } else {
    return null
  }
}
