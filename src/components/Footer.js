import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import handLogo from "../assets/images/hand-logo.svg";

const FooterStyles = styled.footer`
  width: 100%;
  background: var(--black);
  position: relative;
  z-index: 11;
  .footer-inner {
    padding: 30px;
    display: flex;
    color: var(--white);
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width: 650px) {
      flex-direction: column;
    }
    p {
      color: gray;
      font-size: 0.8rem;
    }
    .mobile-margin {
      @media screen and (max-width: 650px) {
        margin: 20px 0;
      }
    }
    .footer-logo {
      width: 30px;
      display: block;
      @media screen and (max-width: 650px) {
        order: -1;
      }
      @media screen and (min-width: 768px) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="footer-inner">
          <p className="mobile-margin">
            ©{new Date().getFullYear()} Wildish&Co LTD. All rights reserved.
          </p>
          <Link className="nostyle footer-logo" to="/">
            <img src={handLogo} alt="" />
          </Link>
          <p>
            <Link
              style={{ marginRight: 30 }}
              className="nostyle"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>{" "}
            Registered Company: 7799598
          </p>
        </div>
      </FooterStyles>
    </>
  );
}
