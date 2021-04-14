import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { gsap } from "gsap";

const CookiesStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--black);
  z-index: 99;
  .cookies-inner {
    /* font-size: 0.8rem; */
    text-align: center;
    color: var(--white);
    display: flex;
    justify-content: center;
    width: 100%;
    span {
      display: block;
    }
    button {
      display: block;
      background: none;
      outline: none;
      border: none;
      color: inherit;
      font-size: inherit;
      justify-self: flex-end;
      align-self: flex-end;
    }
  }
`;

export default function CookiesBanner() {
  return (
    <>
      <CookiesStyles>
        <div className="cookies-inner">
          <span>
            This site uses cookies.{" "}
            <Link to="/privacy-policy" style={{ position: "relative" }}>
              Learn more.
            </Link>
          </span>
          <button>&times;</button>
        </div>
      </CookiesStyles>
    </>
  );
}
