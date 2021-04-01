import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default function Image({ image, ...rest }) {
  return (
    <>
      {image && (
        <ImageWrapper {...rest}>
          {image?.sourceUrl.includes(".gif") ? (
            <img src={image?.sourceUrl} alt={image?.altText} />
          ) : image?.sourceUrl.includes(".svg") ? (
            <img src={image?.sourceUrl} alt={image?.altText} />
          ) : (
            <>
              <GatsbyImage
                image={image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={image?.altText}
              />
            </>
          )}
        </ImageWrapper>
      )}
    </>
  );
}
