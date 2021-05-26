import * as React from "react";
import styled from "styled-components";
import Image from "../../Image";

const Styles = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  video {
    width: 50%;
    justify-self: flex-end;
  }
  .image-and-video_image {
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    left: 50%;
  }
`;

export default function ImageAndVideo({ input: { video, image } }) {
  return (
    <>
      <Styles>
        <video
          src={video?.mediaItemUrl}
          controls={false}
          autoPlay="autoplay"
          muted
          loop
        />
        <Image image={image} className="image-and-video_image" />
      </Styles>
    </>
  );
}
