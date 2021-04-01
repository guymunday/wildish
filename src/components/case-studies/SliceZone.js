import React from "react";
import Image from "../Image";
import Copy from "./slices/Copy";

export default function SliceZone({ slices }) {
  const slice = slices.map((s, i) => {
    switch (s.fieldGroupName) {
      case "case_study_CaseStudy_PageContent_ContentSection":
        return <Copy html={s?.content} />;
      case "case_study_CaseStudy_PageContent_ImageSection":
        return <Image image={s?.image} />;
      case "case_study_CaseStudy_PageContent_ResultsSection":
        return <div>Results</div>;
      case "case_study_CaseStudy_PageContent_Video":
        return s?.videoFile ? (
          <video
            controls={false}
            autoPlay="autoplay"
            muted
            loop
            style={{ width: "100%", height: "auto", display: "block" }}
            src={s?.videoFile?.mediaItemUrl}
          ></video>
        ) : null;
      default:
        return null;
    }
  });
  return <div>{slice}</div>;
}
