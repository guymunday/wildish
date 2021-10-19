import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "../styles/reset"
import global from "../styles/global"
import "../styles/font.css"
import Menu from "./Menu"
import Footer from "./Footer"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import LogoDragger from "./LogoDragger"
import Transition from "./Transition"
import Cursor from "./cursor/Cursor"
import CookiesBanner from "./CookiesBanner"
import MenuFooter from "./MenuFooter"
import IntroScreen from "./IntroScreen"
import { Helmet } from "react-helmet"
import favicon from "../assets/favICON.png"
import { useStaticQuery, graphql } from "gatsby"
import { SEOContext } from "gatsby-plugin-wpgraphql-seo"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`

const Layout = ({ location, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    window.location.hostname.includes(".co.uk") && console.clear()
  })

  const {
    wp: { seo },
  } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `)

  console.log(location.pathname === "/")

  return (
    <>
      <SEOContext.Provider value={{ global: seo }}>
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
        {location.pathname === "/" && <LogoDragger />}
        <MenuFooter />
        <Footer />
        <CookiesBanner />
        {!location.pathname.includes("/client/") && <Cursor />}
      </SEOContext.Provider>
    </>
  )
}

export default Layout
