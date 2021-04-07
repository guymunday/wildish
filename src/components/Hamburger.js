import * as React from "react";
import styled from "styled-components";

const HamburgerStyles = styled.nav`
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 99;
  button {
    background: none;
    outline: none;
    border: none;
    transition: 0.3s ease;
    :active {
      transform: scale(0.8);
    }
    svg {
      fill: var(--yellow);
      mix-blend-mode: difference;
    }
  }
`;

export default function Hamburger({ setMenuOpen }) {
  return (
    <>
      <HamburgerStyles>
        <button onClick={() => setMenuOpen(true)}>
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      </HamburgerStyles>
    </>
  );
}
