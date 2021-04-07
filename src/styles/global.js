import { css } from "styled-components";

const global = css`
  :root {
    --black: #000;
    --white: #fff;
    --yellow: #fade2b;
  }
  body {
    font-family: "Mabry Pro";
    font-style: normal;
    font-size: 18px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .hands {
    font-family: "Hands";
    color: inherit;
    text-decoration: none;
    font-size: 3.5rem;
    line-height: 0.6;
  }
  .glasses:before {
    content: "";
    position: absolute;
    bottom: 25px;
    left: 50%;
    height: 12px;
    width: 31px;
    background-image: url(../assets/svgs/glasses.svg);
    right: 0;
    transform: translateX(-50%);
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    position: relative;
    z-index: 1;
    &:hover {
      color: #000;
      ::after {
        height: 100%;
      }
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      background: var(--yellow);
      bottom: 0;
      left: 0;
      /* transform: rotate(-1deg); */
      z-index: -1;
      transition: 0.3s ease;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    strong {
      position: relative;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 80%;
        width: 100%;
        background: #fff;
        bottom: 0;
        left: 0;
        z-index: -1;
        /* transform: rotate(-1deg); */
        transition: 0.3s ease;
      }
    }
  }

  .html {
    * {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
    *:not(li) {
      margin: 0 0 20px 0;
      &:last-child {
        margin: 0;
      }
    }
  }
`;

export default global;
