import * as React from "react";
import styled from "styled-components";
import CalendlyButton from "../CalendlyButton";

const CallStyles = styled.section`
  text-align: center;
  padding: 120px 30px;
  background: var(--white);

  /* display: flex;
  align-items: center;
  margin: auto;
  max-width: 600px; */
`;

export default function ScheduleCall() {
  return (
    <>
      <CallStyles>
        <p>
          For new business inquiries, please{" "}
          <CalendlyButton alt words="Get in touch" /> with Sam to discuss.
        </p>
      </CallStyles>
    </>
  );
}
