import * as React from "react";
import styled from "styled-components";

const QuoteStyles = styled.section`
  padding: 30px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  blockquote {
    max-width: 850px;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 600;
  }
  h3 {
    margin: 30px 0 0 0;
  }
`;

export default function Quote({ input: { quote, name, title } }) {
  return (
    <>
      <QuoteStyles className="black">
        <blockquote>{quote}</blockquote>
        <h3>{name}</h3>
        <p>{title}</p>
      </QuoteStyles>
    </>
  );
}
