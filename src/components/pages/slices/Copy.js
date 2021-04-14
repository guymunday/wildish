import * as React from "react";
import styled from "styled-components";

const HtmlStyles = styled.div`
  padding: 30px;
  * {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 800px;
  }
  *:not(li) {
    margin: 0 auto 20px auto;
    &:last-child {
      margin: 0 auto;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default function Copy({ input: { copy, colour } }) {
  return (
    <>
      <HtmlStyles
        className={`${colour}`}
        dangerouslySetInnerHTML={{ __html: copy }}
      />
    </>
  );
}
