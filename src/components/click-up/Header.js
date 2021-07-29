import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../assets/images/wildish-logo-full-white.svg"

const StyledHeader = styled.header`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  @media (max-width: 500px) {
    padding: 20px;
  }
  a {
    width: 180px;
    @media (max-width: 500px) {
      width: 150px;
    }
    .header_logo {
      width: 100%;
    }
  }

  .header_inner {
    display: flex;
    p {
      margin-right: 20px;
    }
  }
`

export default function Header() {
  return (
    <>
      <StyledHeader className="black">
        <h1 className="element-invisible">Wildish & Co</h1>
        <Link to="/" className="nostyle">
          <img className="header_logo" src={logo} alt="wildish logo" />
        </Link>
        <div className="header_inner"></div>
      </StyledHeader>
    </>
  )
}
