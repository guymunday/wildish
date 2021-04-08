import * as React from "react";
import { motion } from "framer-motion";
import Image from "./Image";
import styled from "styled-components";

const Styles = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

export default function CrossfadeImage({ initial, image }) {
  return (
    <Styles layoutId={image?.localFile?.publicURL} initial={initial}>
      <Image image={image} className="image" />
    </Styles>
  );
}
