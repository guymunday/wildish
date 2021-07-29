import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/click-up/Header"
import { Helmet } from "react-helmet"
import Boards from "../components/click-up/Boards"

const PasswordStyles = styled.div`
  width: 100%;
  height: 700px;
  background: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 30px;
  }
  input {
    outline: none;
    border: 2px black solid;
    font-size: 1.3rem;
  }
`

const SecondHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 20px;
  }
  .client-buttons {
    margin: 20px;
    text-align: center;
    span {
      margin: 0 15px;
      font-size: 1.5rem;
    }
    button {
      background: transparent;
      outline: none;
      border: none;
      font-size: 1.5rem;
      color: inherit;
      text-decoration: none;
      line-height: 1.1;
      background-image: linear-gradient(var(--yellow), var(--yellow));
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 100% 2px;
      transition: background-size 0.3s;
      :hover,
      :focus {
        background-size: 100% 80%;
      }
    }
  }
`

export default function ClickUp({ data }) {
  const [password, setPassword] = React.useState("")
  const [boardIndex, setBoardIndex] = React.useState(0)

  const passwordCms = data?.page?.clickup?.password
  const letThemIn = password === passwordCms

  React.useEffect(() => {
    if (password === passwordCms) {
      localStorage.setItem(`wildish-client-${data?.page?.title}`, "true")
    }
  }, [password])

  React.useEffect(() => {
    if (localStorage.getItem(`wildish-client-${data?.page?.title}`)) {
      setPassword(passwordCms)
    }
  })

  return (
    <>
      <Helmet>
        <title>{data?.page?.title} &times; Wildish & Co.</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      {!letThemIn && (
        <PasswordStyles>
          <h2>
            Hey {data?.page?.title}{" "}
            <span role="img" alt="wave emoji">
              👋
            </span>
          </h2>
          <p>Enter your password below</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </PasswordStyles>
      )}
      {letThemIn && (
        <>
          <SecondHeader className="white">
            <h2>
              <strong>{data?.page?.title}</strong>
            </h2>
            <div className="client-buttons">
              {data?.page?.clickup?.boards.map((b, i) => {
                return (
                  <>
                    <button onClick={() => setBoardIndex(i)}>
                      {b?.board?.title}{" "}
                    </button>
                    {data?.page?.clickup?.boards.length - 1 !== i && (
                      <span>•</span>
                    )}
                  </>
                )
              })}
            </div>
          </SecondHeader>
          <Boards data={data?.page?.clickup?.boards} boardIndex={boardIndex} />
        </>
      )}
    </>
  )
}

export const CLICK_QUERY = graphql`
  query ClickQuery($slug: String!) {
    page: wpClickPage(slug: { eq: $slug }) {
      title
      clickup {
        password
        boards {
          board {
            embed
            title
          }
        }
      }
    }
  }
`
