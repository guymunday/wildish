import * as React from "react";
import { TwoColumnStyles } from "./TwoColumn";
import { Link } from "gatsby";
import styled from "styled-components";
import FadeIn from "../../FadeIn";

const PillLink = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 25px;
  margin: 2px;
  :after {
    display: none;
  }
  :hover {
    background: var(--black);
    color: var(--white);
  }
`;

export default function CopyButtons({ input: { copy, buttons, colour } }) {
  return (
    <>
      <TwoColumnStyles className={`${colour}`}>
        <FadeIn addClass="two-column-inner">
          <div
            className="column html"
            dangerouslySetInnerHTML={{ __html: copy }}
          />
          <div className="column">
            {buttons?.map((b, i) => {
              const link = b?.button?.caseStudyLink?.slug
                ? b?.button?.caseStudyLink?.slug
                : "";
              return (
                <>
                  <PillLink to={`/case-studies/${link}`}>
                    {b?.button?.buttonLabel}
                  </PillLink>
                </>
              );
            })}
          </div>
        </FadeIn>
      </TwoColumnStyles>
    </>
  );
}
