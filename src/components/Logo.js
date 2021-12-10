import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import handLogo from "../assets/images/hand-logo.svg"
import fullLogo from "../assets/images/wildish-logo-full-white.svg"

const LogoStyles = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: none;
  }
  img {
    display: block;
    width: 50px;
    transition: 0.3s ease;
    :hover {
      transform: scale(1.1);
    }
    @media screen and (max-width: 600px) {
      width: 40px;
    }
  }
`

const LogoStylesMobile = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  img {
    display: block;
    width: 150px;
    transition: 0.3s ease;
    :hover {
      transform: scale(1.1);
    }
  }
`

export default function Logo({ setMenuOpen }) {
  return (
    <>
      <LogoStyles id="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={handLogo} alt="Wildish and Co hand logo" />
        </Link>
      </LogoStyles>
      <LogoStylesMobile>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={fullLogo} alt="Wildish and Co logo" />
        </Link>
      </LogoStylesMobile>
    </>
  )
}
