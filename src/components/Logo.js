import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import handLogo from "../assets/images/hand-logo.svg";

const LogoStyles = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 999;
  img {
    display: block;
    width: 50px;
  }
`;

export default function Logo() {
  return (
    <>
      <LogoStyles>
        <Link to="/">
          <img src={handLogo} alt="Wildish and Co hand logo" />
        </Link>
      </LogoStyles>
    </>
  );
}