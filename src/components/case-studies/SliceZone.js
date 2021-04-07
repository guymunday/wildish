import React from "react";
import FadeIn from "../FadeIn";
import Image from "../Image";
import Copy from "./slices/Copy";

export default function SliceZone({ slices }) {
  console.log(slices)
  const slice = slices.map((s, i) => {
    switch (s.fieldGroupName) {
      case "case_study_CaseStudy_PageContent_ContentSection":
        return (
          <FadeIn key={i}>
            <Copy html={s?.content} />
          </FadeIn>
        );
      case "case_study_CaseStudy_PageContent_ImageSection":
        return (
          <FadeIn key={i}>
            <Image image={s?.image} />
          </FadeIn>
        );
      case "case_study_CaseStudy_PageContent_ResultsSection":
        return (
          <FadeIn key={i}>
            <div>Results</div>
          </FadeIn>
        );
      case "case_study_CaseStudy_PageContent_Video":
        return s?.videoFile ? (
          <FadeIn key={i}>
            <video
              controls={false}
              autoPlay="autoplay"
              muted
              loop
              style={{ width: "100%", height: "auto", display: "block" }}
              src={s?.videoFile?.mediaItemUrl}
            ></video>
          </FadeIn>
        ) : null;
      default:
        return null;
    }
  });
  return <div>{slice}</div>;
}
