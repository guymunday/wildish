import React from "react"
import styled from "styled-components"
import FadeIn from "../../FadeIn"

const StyledFourColumns = styled.section`
  text-align: center;
  padding: 50px;
  .four__columns__copy {
    max-width: 300px;
    margin: 0 auto 50px;
  }
  .four__columns__columns {
    display: flex;
    flex-wrap: wrap;
    .four__columns__column {
      flex: 1;
      padding: 30px;
      @media (max-width: 768px) {
        flex: unset;
        width: 100%;
        padding: 20px;
      }
      .html {
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`

export default function FourColumns({ input }) {
  return (
    <>
      <FadeIn>
        <StyledFourColumns className="black">
          <div
            dangerouslySetInnerHTML={{ __html: input?.copy }}
            className="html four__columns__copy"
          />
          <div className="four__columns__columns">
            {input?.columns?.map((c, i) => {
              return (
                <div key={i} className="four__columns__column">
                  <div style={{ color: "var(--yellow)", fontSize: 26 }}>
                    # {i + 1}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: c?.copy }}
                    className="html"
                  />
                </div>
              )
            })}
          </div>
        </StyledFourColumns>
      </FadeIn>
    </>
  )
}
