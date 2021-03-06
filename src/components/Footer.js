import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  width: 100%;
  background: var(--black);
  @media (max-width: 768px) {
    background: var(--yellow);
  }
  .footer-inner {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width: 650px) {
      flex-direction: column;
    }
    p,
    a {
      color: var(--white);
      font-size: 0.8rem;
      @media (max-width: 768px) {
        color: var(--black);
      }
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
`

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="footer-inner">
          <p className="mobile-margin">
            ©{new Date().getFullYear()} Wildish & Co LTD. All rights reserved.
          </p>
          <p>
            <Link
              style={{ marginRight: 30, position: "relative" }}
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
  )
}
