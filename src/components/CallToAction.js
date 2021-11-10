import * as React from "react"
import styled from "styled-components"
import { emojisplosion } from "emojisplosion"
import AnnoyingPopup from "./AnnoyingPopup"

const CTAStyles = styled.button`
  position: fixed;
  bottom: 30px;
  left: 30px;
  background: red;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  z-index: 100;
  border: 2px solid black;
  box-shadow: 0px 10px 0px black;
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;
  font-size: 1.3rem;
  color: white;
  @media (max-width: 768px) {
    bottom: 15px;
    left: 50%;
    width: 70px;
    height: 70px;
    transform: translate(-50%, 0);
  }
  :active {
    box-shadow: 0px 0px 0px black;
    transform: translate(0%, 10px);
    @media (max-width: 768px) {
      transform: translate(-50%, 10px);
    }
  }
  :focus {
    outline: none;
  }
`

export default function CallToAction() {
  const [pushed, setPushed] = React.useState(false)
  const [pushedCount, setPushedCount] = React.useState(
    Math.floor(Math.random() * 7)
  )

  function handleClick() {
    emojisplosion({
      emojiCount: 90,
      position: {
        x: 100,
        y: window.innerHeight - 150,
      },
      emojis:
        pushedCount === 0
          ? ["💖"]
          : pushedCount === 1
          ? ["🎉"]
          : pushedCount === 2
          ? ["✌️"]
          : pushedCount === 3
          ? ["🔥"]
          : pushedCount === 4
          ? ["💀"]
          : pushedCount === 5
          ? ["💃"]
          : ["💅"],
      physics: {
        fontSize: 40,
        initialVelocities: {
          x: {
            min: -10,
            max: 50,
          },
          y: {
            min: -50,
            max: 10,
          },
        },
      },
    })
    setPushed(!pushed)
    setPushedCount(Math.floor(Math.random() * 7))
  }

  return (
    <>
      <CTAStyles onClick={handleClick}>{pushed ? "Close" : "Push"}</CTAStyles>
      {pushed && <AnnoyingPopup setPushed={setPushed} />}
    </>
  )
}
