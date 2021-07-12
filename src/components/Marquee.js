import * as React from "react"
import styled from "styled-components"

const MarqueeStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background: #000;
  color: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
  .marquee-track {
    display: flex;
    :hover {
      animation-play-state: paused !important;
    }
  }
`

export default function Marquee({ right, ...rest }) {
  const words = {
    words: (
      <>
        Follow us <span role="img">🙏 </span>{" "}
        <span style={{ color: "var(--yellow)" }}>wildishandco_studio</span>
      </>
    ),
  }

  return (
    <>
      <MarqueeStyles right {...rest}>
        <div
          className="marquee-track"
          style={{
            animation: right
              ? "marquee-right 80s linear infinite"
              : "marquee-left 80s linear infinite",
          }}
        >
          {Array.from({ length: 50 }, () => words).map((words, i) => (
            <a
              href="https://www.instagram.com/wildishandco_studio"
              target="_blank"
              rel="noreferrer"
              className="nostyle"
              key={i}
              style={{ margin: "0 10px", fontSize: "1.3rem" }}
            >
              {words.words}
            </a>
          ))}
        </div>
      </MarqueeStyles>
    </>
  )
}
