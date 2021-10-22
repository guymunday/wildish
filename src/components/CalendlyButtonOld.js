import * as React from "react"
import { openPopupWidget } from "react-calendly"
import styled from "styled-components"
import EmojiMarquee from "./EmojiMarquee"

const ButtonStyles = styled.button`
  border: 2px solid var(--yellow);
  border: ${(props) =>
    props.alt ? "2px solid var(--black);" : "2px solid var(--yellow);"};
  padding: 5px 10px;
  background: none;
  color: ${(props) => (props.alt ? "var(--black);" : "var(--white);")};
  border-radius: 25px;
  font-size: 1.4rem;
  margin: 10px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 0.5s ease all;
  width: 180px;
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
    background: var(--yellow);
    .emoji {
      display: flex;
    }
    .words {
      display: none;
    }
  }
`

export default function CalendlyButton({ alt }) {
  const url = "https://calendly.com/sam-wildishandco/newproject"
  const onClick = () => openPopupWidget({ url })

  return (
    <ButtonStyles alt={alt} className="" onClick={onClick}>
      <span className="words">Schedule a call</span>
      <span className="emoji">
        <EmojiMarquee emoji="📞" />
      </span>
    </ButtonStyles>
  )
}
