import * as React from "react"
import styled from "styled-components"
import CalendlyButton from "../CalendlyButton"
import EmailButton from "../EmailButton"

const CallStyles = styled.section`
  text-align: center;
  padding: 120px 30px;
  background: var(--white);

  /* display: flex;
  align-items: center;
  margin: auto;
  max-width: 600px; */
`

export default function ScheduleCall() {
  return (
    <>
      <CallStyles>
        <p>
          For new business inquiries, please <br />
          <EmailButton alt words="Email Sam" />
        </p>
      </CallStyles>
    </>
  )
}
