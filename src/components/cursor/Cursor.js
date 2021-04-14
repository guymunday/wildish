import * as React from "react";
import styled from "styled-components";

const CursorStyles = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: 9999;
  border-radius: 50%;
  background: var(--yellow);
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  pointer-events: none;
  transition: 0.1s ease;
`;

export default function Cursor() {
  const cursorRef = React.useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursorRef.current.style.left = `${clientX}px`;
    cursorRef.current.style.top = `${clientY}px`;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CursorStyles ref={cursorRef} />
    </>
  );
}
