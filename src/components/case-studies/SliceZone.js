import React from "react";
import FadeIn from "../FadeIn";
import Image from "../Image";
import Copy from "./slices/Copy";
import Quote from "./slices/Quote";
import Results from "./slices/Results";
import RollIn from "./slices/RollIn";

export default function SliceZone({ slices }) {
  const slice = slices.map((s, i) => {
    console.log(s);
    switch (s.fieldGroupName) {
      case "case_study_CaseStudy_PageContent_ContentSection":
        return (
          <FadeIn key={i}>
            <Copy html={s?.content} />
          </FadeIn>
        );
      case "case_study_CaseStudy_PageContent_Quote":
        return (
          <FadeIn key={i}>
            <Quote input={s} />
          </FadeIn>
        );
      case "case_study_CaseStudy_PageContent_ImageSection":
        return (
          <FadeIn key={i}>
            <Image image={s?.image} />
          </FadeIn>
        );
      case "case_study_CaseStudy_PageContent_ImageTextRollOver":
        return (
          <RollIn alt={s.order === "text" ? true : false} key={i} input={s} />
        );
      case "case_study_CaseStudy_PageContent_ResultsSection":
        return (
          <FadeIn key={i}>
            <Results results={s} />
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
