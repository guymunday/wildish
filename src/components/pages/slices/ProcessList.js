import React from "react"
import styled from "styled-components"
import FadeIn from "../../FadeIn"

const StyledProcessList = styled.section`
  padding: 50px;
  text-align: center;
  .process__list__copy {
    margin-bottom: 50px;
  }
  .process__list__item {
    display: flex;
    text-align: left;
    max-width: 1000px;
    margin: auto;
    padding: 30px;
    border-top: 1px solid #000;
    &:last-child {
      border-bottom: 1px solid #000;
    }
    > * {
      flex: 1;
    }
    .process__list__number {
      font-size: 5rem;
      @media (max-width: 600px) {
        font-size: 3rem;
        flex: 0.5;
      }
    }
  }
`

export default function ProcessList({ input }) {
  return (
    <>
      <FadeIn>
        <StyledProcessList className="yellow">
          <div
            dangerouslySetInnerHTML={{ __html: input?.copy }}
            className="process__list__copy html"
          />
          {input?.list?.map((l, i) => {
            return (
              <div key={i} className="process__list__item">
                <div className="process__list__number">
                  {(i + 1).toLocaleString("en-UK", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </div>
                <div dangerouslySetInnerHTML={{ __html: l?.copy }} />
              </div>
            )
          })}
        </StyledProcessList>
      </FadeIn>
    </>
  )
}
