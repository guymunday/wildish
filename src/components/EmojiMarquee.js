import * as React from "react"
import styled from "styled-components"

const MarqueeStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: #fff;
  .marquee-track {
    display: flex;
  }
`

export default function EmojiMarquee({ right, emoji, ...rest }) {
  const words = {
    words: <>{emoji}</>,
  }

  return (
    <>
      <MarqueeStyles right {...rest}>
        <div
          className="marquee-track"
          style={{
            animation: right
              ? "marquee-right 10s linear infinite"
              : "marquee-left 10s linear infinite",
          }}
        >
          {Array.from({ length: 50 }, () => words).map((words, i) => (
            <React.Fragment key={i}>{words.words}</React.Fragment>
          ))}
        </div>
      </MarqueeStyles>
    </>
  )
}
