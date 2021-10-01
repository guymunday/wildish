// import React from "react"
import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "../../Image"

const ServiceListContainer = styled.div`
  background-color: var(--yellow);
  padding: 150px;
  @media (max-width: 1199px) {
    padding: 100px 120px 100px 120px;
  }
  @media (max-width: 991px) {
    padding: 80px 120px 80px 120px;
  }
  @media (max-width: 768px) {
    padding: 50px 100px 50px 100px;
  }
  @media (max-width: 600px) {
    padding: 50px 30px 50px 30px;
  }
`

const ServiceListStyles = styled.div`
  display: inline-block;
  margin-bottom: 15px;
  margin-right: 15px;
  @media (max-width: 991px) {
    margin-bottom: 5px;
    margin-right: 5px;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin-bottom: 10px;
  }
  &:hover {
    div {
      display: block;
    }
  }
  a {
    background-color: black;
    color: white;
    border-radius: 50px;
    font-size: 2.4rem;
    margin: 0px 0;
    padding: 10px 40px;
    background-image: none;
    display: block;
    text-align: center;
    &:hover {
      background-color: white;
      color: black;
    }
    @media (max-width: 1199px) {
      font-size: 2rem;
      padding: 8px 30px;
    }
    @media (max-width: 991px) {
      font-size: 1.4rem;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`

const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
  @media (max-width: 991px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export default function ServiceList({ input }) {
  const imageRef = React.useRef(null)
  const [coords, setCoords] = React.useState({ x: 0, y: 0 })
  const [hoveredImage, sethoveredImage] = React.useState(-1)

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    setCoords({ x: clientX + 10, y: clientY + 10 })
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <ServiceListContainer>
        {input?.serviceList?.map((service, index) => {
          return (
            <>
              {hoveredImage === index && (
                <ImageContainer
                  ref={imageRef}
                  style={{ top: coords.y, left: coords.x }}
                >
                  <Image
                    className="image-container"
                    image={service?.service?.serviceImage}
                  />
                </ImageContainer>
              )}
              <ServiceListStyles>
                <Link
                  onMouseOver={() => sethoveredImage(index)}
                  onMouseOut={() => sethoveredImage(-1)}
                  to={`/${service?.service?.serviceLink}`}
                >
                  {service?.service?.serviceText}
                </Link>
              </ServiceListStyles>
            </>
          )
        })}
      </ServiceListContainer>
    </>
  )
}
