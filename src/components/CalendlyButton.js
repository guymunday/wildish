import * as React from "react";
import styled from "styled-components";
import EmojiMarquee from "./EmojiMarquee";

const ButtonStyles = styled.button`
  display: inline-block;
  border: 2px solid var(--yellow);
  border: ${(props) =>
    props.alt ? "2px solid var(--black);" : "2px solid var(--yellow);"};
  padding: 5px 10px;
  background: none;
  color: ${(props) => (props.alt ? "var(--black);" : "var(--white);")};
  border-radius: 25px;
  font-size: inherit;
  margin: 10px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 0.5s ease all;
  width: 205px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    width: 170px;
  }
  a {
    font-size: inherit;
  }
  .emoji {
    display: none;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
  .words {
    display: block;
  }
  :hover {
    background: var(--black);
    .emoji {
      display: flex;
    }
    .words {
      display: none;
    }
  }
`;

export default function CalendlyButton({ alt, words }) {
  return (
    <ButtonStyles alt={alt}>
      <a className="nostyle" href="mailto:hello@wildishandco.co.uk">
        <span className="words">{words ? words : "Talk about a project"}</span>
        <span className="emoji">
          <EmojiMarquee emoji=" 💌 " />
        </span>
      </a>
    </ButtonStyles>
  );
}
