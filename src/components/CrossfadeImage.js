import * as React from "react";
import { motion } from "framer-motion";
import Image from "./Image";
import styled from "styled-components";

const Styles = styled(motion.div)`
  height: 100%;
  width: 100%;
  /* img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  } */
`;

export default function CrossfadeImage({ initial, image }) {
  return (
    <Styles layoutId={image?.localFile?.publicURL} initial={initial}>
      {/* <img src={image?.localFile?.publicURL} alt={image?.altText} /> */}
      <Image image={image} className="image" />
    </Styles>
  );
}
