import * as React from "react"
import styled from "styled-components"
import EmojiMarquee from "./EmojiMarquee"
import HubspotModal from "./HubspotModal"

export const ButtonStyles = styled.button`
  border: 2px solid var(--yellow);
  border: ${(props) =>
    props.alt ? "2px solid var(--black);" : "2px solid var(--yellow);"};
  padding: 5px 10px;
  background: none;
  color: ${(props) => (props.alt ? "var(--black);" : "var(--white);")};
  border-radius: 25px;
  font-size: 1.4rem !important;
  margin: 10px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 0.5s ease all;
  width: 180px;
  text-align: center;
  display: inline-block;
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

export default function CalendlyButton({ alt, ...rest }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const onClick = () => setModalOpen(true)

  return (
    <>
      <ButtonStyles alt={alt} onClick={onClick} {...rest}>
        <span className="words">Schedule a call</span>
        <span className="emoji">
          <EmojiMarquee emoji="📞" />
        </span>
      </ButtonStyles>
      {modalOpen && <HubspotModal setModalOpen={setModalOpen} />}
    </>
  )
}
