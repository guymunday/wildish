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
import AnnoyingPopup from "./AnnoyingPopup";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);

  // React.useEffect(() => {
  //   let timer = setTimeout(() => setPopupOpen(true), 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Transition location={location}>{children}</Transition>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
      {popupOpen && location.pathname === "/" && (
        <AnnoyingPopup setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      )}
      <Hamburger setMenuOpen={setMenuOpen} />
      <Logo setMenuOpen={setMenuOpen} />
      <Footer />
    </>
  );
};

export default Layout;
