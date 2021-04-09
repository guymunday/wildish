import * as React from "react";
import styled from "styled-components";
import Image from "../../Image";
import FadeIn from "../../FadeIn";

const CopyImageStyles = styled.section`
  padding: 100px 30px;
  .copy-image-inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .column {
      flex: 1;
      padding: 30px;
      @media screen and (max-width: 480px) {
        padding: 0;
      }
    }
  }
`;

export default function CopyImage({ input: { copy, image, colour } }) {
  return (
    <>
      <CopyImageStyles className={`${colour}`}>
        <FadeIn addClass="copy-image-inner">
          <div
            className="html column"
            dangerouslySetInnerHTML={{ __html: copy }}
          />
          <Image className="column" image={image} />
        </FadeIn>
      </CopyImageStyles>
    </>
  );
}
