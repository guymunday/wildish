import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";
import global from "../styles/global";
import "../styles/font.css";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <main key={location.pathname}>{children}</main>
        {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
      <button onClick={() => setMenuOpen(true)}>menu</button>
      <Footer />
    </>
  );
};

export default Layout;
