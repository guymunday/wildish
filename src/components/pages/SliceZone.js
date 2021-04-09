import * as React from "react";
import CopyButtons from "./slices/CopyButtons";
import Hero from "./slices/Hero";
import TwoColumn from "./slices/TwoColumn";
import ThreeColumn from "./slices/ThreeColumn";
import CopyImage from "./slices/CopyImage";

export default function SliceZone({ slices }) {
  const slice = slices.map((s, i) => {
    console.log(s);
    switch (s.fieldGroupName) {
      case "gql_page_Contentblocks_ContentBlocks_Hero":
        return <Hero key={i} input={s} />;
      case "gql_page_Contentblocks_ContentBlocks_TwoColumnCopy":
        return <TwoColumn key={i} input={s} />;
      case "gql_page_Contentblocks_ContentBlocks_CopyAndButtons":
        return <CopyButtons key={i} input={s} />;
      case "gql_page_Contentblocks_ContentBlocks_ThreeColumnCopy":
        return <ThreeColumn key={i} input={s} />;
      case "gql_page_Contentblocks_ContentBlocks_CopyAndImage":
        return <CopyImage key={i} input={s} />;
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
