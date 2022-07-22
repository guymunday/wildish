import React from "react"
import styled from "styled-components"
import FadeIn from "../../FadeIn"
import Image from "../../Image"

const StyledClientReviews = styled.section`
  text-align: center;
  padding: 50px;
  .client__reviews__copy {
    max-width: 300px;
    margin: 0 auto 50px;
  }
  .client__reviews__container {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .client__review {
      padding: 30px;
      border: 1px solid var(--yellow);
      margin: 20px;
      .client__review__image {
        width: 80%;
        margin: auto;
      }
      p {
        font-size: 0.9rem;
        margin-top: 10px;
      }
    }
  }
`

export default function ClientReviews({ input }) {
  return (
    <>
      <FadeIn>
        <StyledClientReviews className="white">
          <div
            dangerouslySetInnerHTML={{ __html: input?.copy }}
            className="client__reviews__copy html"
          />
          <div className="client__reviews__container">
            {input?.reviews?.map((r, i) => {
              return (
                <div key={i} className="client__review">
                  <div className="client__review__image">
                    <Image image={r?.clientLogo} />
                  </div>
                  <p>{r?.copy}</p>
                </div>
              )
            })}
          </div>
        </StyledClientReviews>
      </FadeIn>
    </>
  )
}
