import React from "react";
import SanitisedHtml from "./SanitisedHtml";

export default function Copy({ html }) {
  return (
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
  );
}
