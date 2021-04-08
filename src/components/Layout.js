import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";
import "../styles/font.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
// import Transition from "./Transition";
import { AnimateSharedLayout } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <GlobalStyle />
      <AnimateSharedLayout type="crossfade">
        <main key={location.pathname}>{children}</main>
      </AnimateSharedLayout>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
      <Hamburger setMenuOpen={setMenuOpen} />
      <Footer />
    </>
  );
};

export default Layout;
