import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { navigate } from "@reach/router";

const MenuStyles = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: var(--yellow);
  z-index: 999;
  .close-button {
    display: flex;
    justify-content: flex-end;
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
  .menu-container {
    min-height: 60vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .menu-list {
      display: flex;
      flex-direction: column;
      padding: 30px;
      .menu-item {
        display: inline-block;
        font-size: 4rem;
        line-height: 1.2;
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
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default function Menu({ setMenuOpen }) {
  const [direction, setDirection] = React.useState("");

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

  return (
    <>
      <MenuStyles
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{
          x:
            direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
          y: direction === "up" ? "-100%" : null,
          transition: {
            delay: 0.2,
            duration: 0.8,
          },
        }}
      >
        <div className="close-button">
          <button onClick={() => setMenuOpen(false)}>&times;</button>
        </div>
        <div className="menu-container">
          <div className="menu-list">
            <Link
              to={data?.menu?.menu?.links[0]?.internalLink}
              className="menu-item"
              onMouseOver={() => setDirection("right")}
            >
              <span className="menu-arrow">→</span>{" "}
              {data?.menu?.menu?.links[0]?.links}
            </Link>
            <Link
              to={data?.menu?.menu?.links[1]?.internalLink}
              className="menu-item"
              onMouseOver={() => setDirection("up")}
            >
              <span className="menu-arrow">↑</span>{" "}
              {data?.menu?.menu?.links[1]?.links}
            </Link>
            <Link
              to={data?.menu?.menu?.links[2]?.internalLink}
              className="menu-item"
              onMouseOver={() => setDirection("left")}
            >
              <span className="menu-arrow">←</span>{" "}
              {data?.menu?.menu?.links[2]?.links}
            </Link>
            <div className="menu-item">
              <span className="menu-arrow">↓</span> Contact
            </div>
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
            {data?.menu?.menu?.addesses?.map((a, i) => {
              return (
                <div
                  key={i}
                  className="html menu-address"
                  dangerouslySetInnerHTML={{ __html: a?.address }}
                />
              );
            })}
          </div>
        </div>
      </MenuStyles>
    </>
  );
}

/*             <button
              className="menu-item"
              onClick={async () => {
                await setDirection("right");
                await navigate("/blog");
              }}
            >
              About
            </button> */
