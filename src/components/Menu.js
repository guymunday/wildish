import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { gsap } from "gsap";
import CalendlyButton from "./CalendlyButton";

const MenuStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: var(--yellow);
  z-index: 999;
  .menu-container {
    min-height: 60vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
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
      .menu-item {
        display: inline-block;
        font-size: 4rem;
        line-height: 1.2;
        background: none;
        outline: none;
        border: none;
        text-align: left;
        @media screen and (max-height: 768px) {
          font-size: 3rem;
        }
        .menu-arrow {
          display: inline-block;
          width: 70px;
          text-align: center;
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
      .menu-address {
        width: 25%;
        padding: 20px;
        h3 {
          &:not(:first-child) {
            margin-top: 30px;
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
`;

export default function Menu({ setMenuOpen, menuOpen }) {
  const [direction, setDirection] = React.useState({});
  const menuRef = React.useRef(null);

  const data = useStaticQuery(graphql`
    {
      menu: wpCptPage(slug: { eq: "menu" }) {
        menu {
          addesses {
            address
          }
          links {
            links
            internalLink
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    let tl = gsap.timeline();

    tl.from(menuRef.current, {
      scale: 0.5,
      duration: 0.2,
    }).from(".menu-address", {
      opacity: 0,
      x: -100,
      duration: 0.2,
      stagger: 0.2,
    });
  }, []);

  const closeAnimation = () => {
    let tl = gsap.timeline();

    return tl
      .to(".menu-address", {
        opacity: 0,
        x: -100,
        duration: 0.2,
        stagger: {
          each: 0.2,
          from: "end",
        },
      })
      .to(menuRef.current, {
        scale: 0.5,
        duration: 0.2,
        autoAlpha: 0,
      });
  };

  const exitAnimation = () => {
    return gsap.to(menuRef.current, direction);
  };

  const handleMenuClick = async (i) => {
    await navigate(data?.menu?.menu?.links[i]?.internalLink);
    await exitAnimation();
    await setMenuOpen(false);
  };

  const handleCloseButton = async () => {
    await closeAnimation();
    await setMenuOpen(false);
  };

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
              );
            })}
            <div className="menu-address">
              <h3>Hire us</h3>
              <a href="mailto:hello@wildishandco.co.uk">
                hello@wildishandco.co.uk
              </a>
              <br />
              <CalendlyButton />
              <h3>Work with us</h3>
              <a href="mailto:work@wildishandco.co.uk">
                work@wildishandco.co.uk
              </a>
            </div>
            <div className="menu-address">
              <h3>Follow us</h3>
              <a
                className="nostyle"
                href="https://www.instagram.com/wildishandco_studio/"
                target="_blank"
              >
                <span style={{ color: "var(--yellow)" }}>&rarr;</span> Instagram
              </a>
              <br />
              <a
                className="nostyle"
                href="https://www.facebook.com/wildishandco/"
                target="_blank"
              >
                <span style={{ color: "var(--yellow)" }}>&rarr;</span> Facebook
              </a>
              <br />
              <a
                className="nostyle"
                href="https://www.linkedin.com/company/wildish-&-co/"
                target="_blank"
              >
                <span style={{ color: "var(--yellow)" }}>&rarr;</span> Linkedin
              </a>
              {/* <h3>Keep up to date</h3>
              <a href="">Sign up to our delicious spam</a> */}
            </div>
          </div>
        </div>
      </MenuStyles>
    </>
  );
}
