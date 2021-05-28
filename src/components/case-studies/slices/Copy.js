import React from "react";
import SanitisedHtml from "./SanitisedHtml";
import styled from "styled-components";

const CopyWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--white);
`;

export default function Copy({ html }) {
  return (
    <CopyWrapper>
      <div
        style={{
          maxWidth: 850,
          margin: "50px auto",
          textAlign: "center",
          padding: 30,
        }}
      >
        <SanitisedHtml center html={html} />
      </div>
    </CopyWrapper>
  );
}
