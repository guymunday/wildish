import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/click-up/Header"

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

export default function ClickUp({ data }) {
  const [password, setPassword] = React.useState("")
  const passwordCms = data?.page?.clickup?.password

  const letThemIn =
    (typeof window !== "undefined" && localStorage.getItem("wildish-client")) ||
    password === passwordCms

  React.useEffect(() => {
    if (password === passwordCms) {
      localStorage.setItem("wildish-client", "true")
    }
  }, [password])

  return (
    <>
      <Header />
      {!letThemIn && (
        <PasswordStyles>
          <h2>
            Hey {data?.page?.title}{" "}
            <span role="img" alt="wave emoji">
              👋
            </span>
          </h2>
          <p>Enter your password below...</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </PasswordStyles>
      )}
      {letThemIn && (
        <div dangerouslySetInnerHTML={{ __html: data?.page?.clickup?.embed }} />
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
        embed
      }
    }
  }
`
