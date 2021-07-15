import React from "react"
import ContactChat from "../components/ContactChat"

export default function PlayPage() {
  return (
    <>
      <div
        style={{
          minHeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContactChat />
      </div>
    </>
  )
}
