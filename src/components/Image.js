import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper,
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1 !important;
  }
`;

export default function Image({ image, ...rest }) {
  return (
    <>
      {image && (
        <ImageWrapper {...rest}>
          {image?.localFile?.publicURL?.includes(".gif") ? (
            <img src={image?.localFile?.publicURL} alt={image?.altText} />
          ) : image?.localFile?.publicURL?.includes(".svg") ? (
            <img src={image?.localFile?.publicURL} alt={image?.altText} />
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
