import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";
import "../styles/font.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <GlobalStyle />
      <main key={location.pathname}>{children}</main>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
      <Hamburger setMenuOpen={setMenuOpen} />
      <Logo />
      <Footer />
    </>
  );
};

export default Layout;
