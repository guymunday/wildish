import * as React from "react";
import styled from "styled-components";
import FadeIn from "../../FadeIn";

export const TwoColumnStyles = styled.section`
  padding: 100px 30px;
  .two-column-inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .column {
      flex: 1;
      padding: 30px;
      @media screen and (max-width: 480px) {
        padding: 0;
        &:last-child {
          padding: 60px 0 0 0;
        }
      }
    }
  }
`;

export default function TwoColumn({ input: { colour, columnOne, columnTwo } }) {
  return (
    <>
      <TwoColumnStyles className={`${colour}`}>
        <FadeIn addClass="two-column-inner">
          <div
            className="html column"
            dangerouslySetInnerHTML={{ __html: columnOne }}
          />
          {columnTwo && (
            <div
              className="html column"
              dangerouslySetInnerHTML={{ __html: columnTwo }}
            />
          )}
        </FadeIn>
      </TwoColumnStyles>
    </>
  );
}
