import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";
import "../styles/font.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Transition from "./Transition";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    console.log(ref);
  });

  return (
    <>
      <GlobalStyle />
      <Transition location={location}>{children}</Transition>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
      <Hamburger setMenuOpen={setMenuOpen} />
      <Logo setMenuOpen={setMenuOpen} />
      <Footer />
    </>
  );
};

export default Layout;
