import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "../styles/reset"
import global from "../styles/global"
import "../styles/font.css"
import Menu from "./Menu"
import Footer from "./Footer"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Transition from "./Transition"
import Cursor from "./cursor/Cursor"
import CookiesBanner from "./CookiesBanner"
import MenuFooter from "./MenuFooter"
import IntroScreen from "./IntroScreen"
import { Helmet } from "react-helmet"
import favicon from "../assets/favICON.png"
import CallToAction from "./CallToAction"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  
  return (
    <>
      <GlobalStyle />
      <IntroScreen />
      <Helmet>
        <html lang="en" />
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="canonical" href={location.href} />
      </Helmet>
      <Transition location={location}>{children}</Transition>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
      <Hamburger setMenuOpen={setMenuOpen} />
      {!location.pathname.includes("/client/") && (
        <Logo setMenuOpen={setMenuOpen} />
      )}
      <MenuFooter />
      <Footer />
      <CookiesBanner />
      {!location.pathname.includes("/client/") && <Cursor />}
    </>
  )
}

export default Layout
