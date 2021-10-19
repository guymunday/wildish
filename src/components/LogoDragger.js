import * as React from "react"
import styled from "styled-components"
import handLogo from "../assets/images/hand-logo.svg"

const LogoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`

export default function LogoDragger() {
  const ref = React.useRef(null)
  const [visible, setVisible] = React.useState(false)

  function makeLogoDraggable() {
    const canvas = ref.current
    let logoImg = document.createElement("img")
    logoImg.src = handLogo

    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2

    canvas.style.width = window.innerWidth + "px"
    canvas.style.height = window.innerHeight + "px"

    const context = canvas.getContext("2d")
    context.scale(2, 2)

    let aimX = null
    let aimY = null
    let currentX = null
    let currentY = null

    document.addEventListener("mousemove", function (event) {
      aimX = event.clientX
      aimY = event.clientY
      if (currentX === null) {
        currentX = event.clientX
        currentY = event.clientY
      }
    })

    canvas.addEventListener("click", () => {
      setVisible(false)
    })

    const draw = function () {
      if (currentX) {
        context.drawImage(logoImg, currentX - 50, currentY - 100, 100, 200)

        currentX = currentX + (aimX - currentX) * 0.1
        currentY = currentY + (aimY - currentY) * 0.1
      }

      requestAnimationFrame(draw)
    }

    draw()
  }

  React.useEffect(() => {
    const logo = document.getElementById("logo")

    logo.addEventListener("click", () => {
      setVisible(true)
    })
    logo.addEventListener("click", makeLogoDraggable)
    return () => {
      logo.removeEventListener("click", makeLogoDraggable)
    }
  }, [])

  return (
    <>
      <LogoOverlay style={{ pointerEvents: visible ? "auto" : "none" }}>
        {visible && <canvas ref={ref} />}
      </LogoOverlay>
    </>
  )
}
