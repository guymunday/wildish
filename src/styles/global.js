import { css } from "styled-components"

const global = css`
  :root {
    --black: #000;
    --white: #fff;
    --yellow: #fade2b;
  }

  * {
    font-family: "Mabry Pro";
    ::selection {
      color: var(--black);
      background: var(--yellow);
    }
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
    font-weight: 400 !important;
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

  button {
    cursor: pointer;
  }

  a,
  .link {
    color: inherit;
    text-decoration: none;

    background-image: linear-gradient(var(--yellow), var(--yellow));
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    transition: background-size 0.3s;
  }

  a:hover,
  a:focus {
    background-size: 100% 80%;
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

  h1 {
    font-size: 3rem;
    @media screen and (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  h2 {
    font-size: 2.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 400;
    strong {
      font-weight: 400;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }

  p {
    strong {
      font-weight: 400;
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
    background: #fff;
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
    pointer-events: none;
    z-index: 1;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: -1;
    }
  }

  .animation-iframe-container {
    width: 100%;
    padding-top: 400px;
    position: relative;
    pointer-events: none;
    margin-bottom: -60px;
    @media screen and (max-height: 800px) {
      padding-top: 300px;
    }
    @media screen and (max-height: 600px) {
      display: none;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: -1;
    }
  }

  .casestudy-iframe-container {
    width: 100%;
    padding-top: 56.25%;
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

  .animation-iframe-container-mobile {
    width: 100%;
    padding-top: 400px;
    position: relative;
    pointer-events: none;
    margin-bottom: -60px;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: -1;
    }
  }

  .clickup-embed {
    display: block;
    min-height: 700px !important;
  }

  .services-span-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .services-span {
      min-width: 33%;
      font-size: 0.9rem;
      background: black;
      color: white;
      margin: 5px 2px !important;
      padding: 5px 10px;
      border-radius: 23px;
    }
  }

  .cookies-container {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--black);
    color: var(--white);
    padding: 10px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: underline;
    }
    @media screen and (max-width: 400px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .cookies-inner {
    max-width: 700px;
  }

  .cookies-buttons {
    display: flex;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 400px) {
      margin-left: 0;
      margin-top: 10px;
      width: auto;
    }
  }

  #rcc-decline-button {
    text-decoration: underline;
  }

  #rcc-confirm-button {
    background: transparent;
    outline: none;
    border: var(--yellow) 1px solid;
    color: var(--white);
    padding: 5px 10px;
    border-radius: 15px;
    margin: 0 10px;
    transition: 0.3s ease;
    :hover {
      background: var(--yellow);
      color: var(--black);
    }
  }

  .element-invisible {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
`

export default global
