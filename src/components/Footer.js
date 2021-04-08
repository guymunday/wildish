import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import handLogo from "../assets/images/hand-logo.svg";

const FooterStyles = styled.footer`
  width: 100%;
  background: var(--black);
  .footer-inner {
    padding: 30px;
    display: flex;
    color: var(--white);
    justify-content: space-between;
    align-items: center;
    img {
      width: 50px;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="footer-inner">
          <p>Something somthing {new Date().getFullYear()}</p>
          <Link className="nostyle" to="/">
            <img src={handLogo} alt="" />
          </Link>
          <p>Something somthing {new Date().getFullYear()}</p>
        </div>
      </FooterStyles>
    </>
  );
}
