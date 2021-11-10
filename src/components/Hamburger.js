import * as React from "react"
import styled from "styled-components"

const HamburgerStyles = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 50px;
  z-index: 99;
  background-color: transparent;
  mix-blend-mode: difference;
  @media (max-width: 768px) {
    left: 50%;
    right: unset;
    transform: translate(-50%, 0);
    padding: 30px;
  }
  button {
    background-color: transparent;
    outline: none;
    border: none;
    transition: 0.2s ease;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    :active {
      transform: translate(-50%, -50%) scale(0.8);
    }
    svg {
      rect {
        fill: white;
      }
    }
  }
`

export default function Hamburger({ setMenuOpen }) {
  const hamburgerRef = React.useRef(null)
  const buttonRef = React.useRef(null)

  const handleMagnetic = (event) => {
    const { clientX, clientY } = event
    const left = hamburgerRef.current.getBoundingClientRect().left

    buttonRef.current.style.left = `${clientX - left}px`
    buttonRef.current.style.top = `${clientY}px`
  }

  const resetMagnet = () => {
    buttonRef.current.style.left = `50%`
    buttonRef.current.style.top = `50%`
  }

  React.useEffect(() => {
    const hamburger = hamburgerRef.current

    hamburger.addEventListener("mouseover", handleMagnetic)
    hamburger.addEventListener("mouseleave", resetMagnet)
    return () => {
      hamburger.removeEventListener("mouseover", handleMagnetic)
      hamburger.removeEventListener("mouseleave", resetMagnet)
    }
  }, [])

  return (
    <>
      <HamburgerStyles ref={hamburgerRef}>
        <button
          aria-label="menu"
          onClick={() => setMenuOpen(true)}
          ref={buttonRef}
        >
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      </HamburgerStyles>
    </>
  )
}
