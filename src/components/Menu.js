import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { gsap } from "gsap"
import CalendlyButton from "./CalendlyButton"

const MenuStyles = styled.nav`
  a,
  p {
    font-size: 18px;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: var(--yellow);
  z-index: 999;
  opacity: 0;
  .menu-container {
    min-height: 60vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
      min-height: 40vh;
    }
    .close-button {
      display: flex;
      justify-content: flex-end;
      align-self: flex-start;
      button {
        background: transparent;
        outline: none;
        border: none;
        padding: 10px 30px;
        font-size: 50px;
        margin: 0;
        cursor: pointer;
        transition: 0.3s ease;
        color: #000 !important;
        :active {
          transform: scale(0.8);
        }
      }
    }
    .menu-list {
      display: flex;
      flex-direction: column;
      padding: 30px;
      align-self: flex-end;
      @media screen and (max-width: 500px) {
        padding: 15px;
      }
      .menu-item {
        display: inline-block;
        font-size: 4rem;
        line-height: 1.2;
        background: none;
        outline: none;
        border: none;
        text-align: left;
        color: #000 !important;
        :hover {
          .menu-arrow {
            transform: rotate(360deg);
          }
        }
        @media screen and (max-height: 768px) {
          font-size: 3rem;
        }
        @media screen and (max-width: 500px) {
          font-size: 2.4rem;
        }
        @media screen and (max-width: 350px) {
          font-size: 1.8rem;
        }
        .menu-arrow {
          display: inline-block;
          width: 70px;
          text-align: center;
          transition: 0.4s transform ease;
        }
      }
    }
  }
  .menu-contact {
    min-height: 40vh;
    background: #000;
    color: #fff;
    .menu-contact-inner {
      padding: 30px;
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 650px) {
        padding: 10px;
      }
      .menu-address {
        width: 25%;
        padding: 20px;
        h3 {
          &:not(:last-child) {
            margin-top: 30px !important;
          }
        }
        .social-link {
          .footer-arrow {
            transition: 0.4s transform ease;
          }
          :hover {
            .footer-arrow {
              display: inline-block;
              transform: rotate(360deg);
            }
          }
        }
        @media screen and (max-width: 950px) {
          width: 50%;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
`

export default function Menu({ setMenuOpen, menuOpen }) {
  const [direction, setDirection] = React.useState({})
  const menuRef = React.useRef(null)

  const data = useStaticQuery(graphql`
    {
      menu: wpCptPage(slug: { eq: "menu" }) {
        menu {
          addesses {
            address
          }
          hireUs {
            emailAddress
            text
          }
          workWithUs {
            emailAddress
            text
          }
          socialLinks {
            socialLink {
              link
              text
            }
          }
          links {
            links
            internalLink
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    let tl = gsap.timeline()

    tl.to(menuRef.current, {
      opacity: 1,
      duration: 0.4,
    }).from(".menu-address", {
      opacity: 0,
      y: 50,
      duration: 0.2,
      stagger: 0.1,
    })
  }, [])

  const closeAnimation = () => {
    let tl = gsap.timeline()

    return tl
      .to(".menu-address", {
        opacity: 0,
        y: 50,
        duration: 0.2,
        stagger: {
          each: 0.1,
          from: "end",
        },
      })
      .to(menuRef.current, {
        duration: 0.2,
        autoAlpha: 0,
      })
  }

  const exitAnimation = () => {
    return gsap.to(menuRef.current, direction)
  }

  const handleMenuClick = async (i) => {
    await navigate(data?.menu?.menu?.links[i]?.internalLink)
    await exitAnimation()
    await setMenuOpen(false)
  }

  const handleCloseButton = async () => {
    await closeAnimation()
    await setMenuOpen(false)
  }

  return (
    <>
      <MenuStyles ref={menuRef}>
        <div className="menu-container">
          <div className="menu-list">
            <button
              className="menu-item"
              onMouseOver={() => setDirection({ xPercent: 100 })}
              onClick={() => handleMenuClick(0)}
            >
              <span className="menu-arrow">→</span>{" "}
              {data?.menu?.menu?.links[0]?.links}
            </button>
            <button
              className="menu-item"
              onMouseOver={() => setDirection({ yPercent: -100 })}
              onClick={() => handleMenuClick(1)}
            >
              <span className="menu-arrow">↑</span>{" "}
              {data?.menu?.menu?.links[1]?.links}
            </button>
            <button
              className="menu-item"
              onMouseOver={() => setDirection({ xPercent: -100 })}
              onClick={() => handleMenuClick(2)}
            >
              <span className="menu-arrow">←</span>{" "}
              {data?.menu?.menu?.links[2]?.links}
            </button>
            <div className="menu-item">
              <span className="menu-arrow">↓</span> Contact
            </div>
          </div>
          <div className="close-button">
            <button onClick={handleCloseButton}>&times;</button>
          </div>
        </div>
        <div className="menu-contact">
          <div className="menu-contact-inner">
            {data?.menu?.menu?.addesses?.map((a, i) => {
              return (
                <div
                  key={i}
                  className="html menu-address"
                  dangerouslySetInnerHTML={{ __html: a?.address }}
                />
              )
            })}
            <div className="menu-address">
              <h3 style={{ marginBottom: 20 }}>
                {data?.menu?.menu?.hireUs?.text}
              </h3>
              <a href={`mailto:${data?.menu?.menu?.hireUs?.emailAddress}`}>
                {data?.menu?.menu?.hireUs?.emailAddress}
              </a>
              <br />
              <CalendlyButton />
              <h3 style={{ marginBottom: 20 }}>
                {data?.menu?.menu?.workWithUs?.text}
              </h3>
              <a href={`mailto:${data?.menu?.menu?.workWithUs?.emailAddress}`}>
                {data?.menu?.menu?.workWithUs?.emailAddress}
              </a>
            </div>
            <div className="menu-address">
              <h3 style={{ marginBottom: 20 }}>Follow us</h3>
              {data?.menu?.menu?.socialLinks?.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    <a
                      className="nostyle social-link"
                      href={l?.socialLink?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className="footer-arrow"
                        style={{ color: "var(--yellow)" }}
                      >
                        &rarr;
                      </span>{" "}
                      {l?.socialLink?.text}
                    </a>
                    <br />
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </MenuStyles>
    </>
  )
}
