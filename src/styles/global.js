import { css } from "styled-components";

const global = css`
  :root {
    --black: #000;
    --white: #fff;
    --yellow: #fade2b;
  }

  * {
    font-family: "Mabry Pro";
  }

  body {
    font-family: "Mabry Pro";
    font-style: normal;
    font-size: 20px;
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

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    position: relative;
    z-index: 1;
    background: linear-gradient(
      0deg,
      rgba(250, 222, 43, 1) 10%,
      rgba(250, 222, 43, 0) 10%
    );
    ::before {
      position: absolute;
      content: "";
      display: block;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background: var(--yellow);
      z-index: -1;
      transition: height 0.3s ease;
    }
    &:hover {
      ::before {
        height: 100%;
      }
    }
  }

  a.nostyle {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    position: relative;
    background: none;
    &::before {
      content: "";
      display: none;
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
      background: rgb(255, 255, 255);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 80%,
        rgba(255, 255, 255, 0) 80%
      );
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
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @keyframes marquee-left {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(-30%);
    }
  }

  @keyframes marquee-right {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(30%);
    }
  }

  li {
    margin-left: 2rem;
  }

  .black {
    background: var(--black);
    color: var(--white);
    strong {
      color: var(--yellow);
      background: transparent;
    }
  }

  .yellow {
    background: var(--yellow);
  }

  .white {
    strong {
      background: rgba(250, 222, 43, 1);
      background: linear-gradient(
        0deg,
        rgba(250, 222, 43, 1) 80%,
        rgba(250, 222, 43, 0) 80%
      );
    }
  }

  .square-iframe-container {
    width: 100%;
    padding-top: 100%;
    position: relative;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export default global;
