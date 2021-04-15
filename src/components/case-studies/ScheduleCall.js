import * as React from "react";
import styled from "styled-components";
import CalendlyButton from "../CalendlyButton";

const CallStyles = styled.section`
  text-align: center;
  padding: 120px 30px;
`;

export default function ScheduleCall() {
  return (
    <>
      <CallStyles>
        For new business inquiries, please <CalendlyButton alt /> with Sam to
        discuss.
      </CallStyles>
    </>
  );
}
