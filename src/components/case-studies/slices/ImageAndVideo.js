import * as React from "react";
import styled from "styled-components";
import Image from "../../Image";

const Styles = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  video {
    width: 50%;
    height: 100%;
  }
  .image-and-video_image {
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
  }
`;

export default function ImageAndVideo({ input: { video, image, order } }) {
  console.log(order);
  return (
    <>
      <div className="div">
        <Styles>
          {order === "text" && (
            <>
              <video
                src={video?.mediaItemUrl}
                controls={false}
                autoPlay="autoplay"
                muted
                loop
                playsInline
              />
              <Image
                image={image}
                className="image-and-video_image"
                style={{ left: "50%" }}
              />
            </>
          )}
          {order === "image" && (
            <>
              <div style={{ width: "50%" }} />
              <video
                src={video?.mediaItemUrl}
                controls={false}
                autoPlay="autoplay"
                muted
                loop
                playsInline
              />
              <Image
                image={image}
                className="image-and-video_image"
                style={{ left: "0%" }}
              />
            </>
          )}
        </Styles>
      </div>
    </>
  );
}
