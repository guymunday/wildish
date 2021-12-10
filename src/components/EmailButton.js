import * as React from "react"
import EmojiMarquee from "./EmojiMarquee"
import { ButtonStyles } from "./CalendlyButton"

export default function EmailButton({ alt, ...rest }) {
  return (
    <>
      <ButtonStyles as="a" alt={alt} href="mailto:hello@wildishandco.co.uk" {...rest}>
        <span className="words">Email us</span>
        <span className="emoji">
          <EmojiMarquee emoji="✉️ " />
        </span>
      </ButtonStyles>
    </>
  )
}
