import * as React from "react"
import styled from "styled-components"
import Image from "../../Image"
import useEventListener from "../../../hooks/useEventListener"

const HoverStyles = styled.section`
  padding: 100px 30px;
  .hover-inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .column {
      width: 70%;
      padding: 30px;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      @media screen and (max-width: 480px) {
        padding: 0;
      }
      .hover-title {
        margin-bottom: 30px;
      }
      .hover-text {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
      .hover-image {
        position: fixed;
        width: 400px;
        height: auto;
        z-index: 9;
        pointer-events: none;
        @media screen and (max-width: 600px) {
          width: 250px;
        }
      }
    }
  }
`

export default function Hover({ input }) {
  const [imageToHover, setImageToHover] = React.useState(-1)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const imageHandler = React.useCallback(
    ({ clientX, clientY }) => {
      setMousePosition({ x: clientX, y: clientY })
    },
    [setMousePosition]
  )

  useEventListener("mousemove", imageHandler)

  return (
    <>
      <HoverStyles
        className={input?.colour}
        onMouseLeave={() => setImageToHover(-1)}
      >
        <div className="hover-inner">
          <div className="column">
            <div
              className="html hover-title"
              dangerouslySetInnerHTML={{ __html: input?.title }}
            />
            {input?.textHoverImage?.map((h, i) => {
              return (
                <>
                  {imageToHover === i && (
                    <Image
                      className="hover-image"
                      image={h?.hoverImage}
                      style={{
                        top: `calc(${mousePosition.y}px - 20%)`,
                        left: `calc(${mousePosition.x}px + 70px)`,
                      }}
                    />
                  )}
                  <div
                    className="html hover-text"
                    dangerouslySetInnerHTML={{ __html: h?.text }}
                    onMouseEnter={() => setImageToHover(i)}
                  />
                </>
              )
            })}
          </div>
        </div>
      </HoverStyles>
    </>
  )
}
