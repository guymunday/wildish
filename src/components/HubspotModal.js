import React from "react"
import styled from "styled-components"
import Modal from "./Modal"

const HubspotStyles = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  max-width: 880px;
  max-height: 670px;
  position: relative;
  iframe {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }
  button {
    background: #fff;
    outline: none;
    border: none;
    border-radius: 50%;
    display: block;
    width: 50px;
    height: 50px;
    padding: 0;
    font-size: 50px;
    margin: 0;
    cursor: pointer;
    transition: 0.3s ease;
    color: #000 !important;
    position: absolute;
    top: -15px;
    right: -15px;
    line-height: 1;
    z-index: 2;
    :active {
      transform: scale(0.8);
    }
  }
`

export default function HubspotModal({ setModalOpen }) {
  return (
    <>
      <Modal>
        <HubspotStyles>
          <iframe
            title="Book a meeting with Sam Fresco"
            src="https://meetings.hubspot.com/sam902"
          />
          <button onClick={() => setModalOpen(false)}>&times;</button>
        </HubspotStyles>
      </Modal>
    </>
  )
}
