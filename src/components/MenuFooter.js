import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import CalendlyButton from "./CalendlyButton"
import EmailButton from "./EmailButton"

const MenuFooterStyles = styled.nav`
  a,
  p {
    font-size: 18px;
  }
  .menu-contact {
    min-height: 40vh;
    background: var(--black);
    color: var(--white);
    @media (max-width: 768px) {
      color: var(--black);
      background: var(--yellow);
    }
    .menu-contact-inner {
      padding: 30px;
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 650px) {
        padding: 10px;
      }
      .footer-address {
        width: 25%;
        padding: 20px;

        h3 {
          &:not(:first-child) {
            margin-top: 30px;
          }
        }
        .social-link {
          display: inline-block;
          .footer-arrow {
            display: inline-block;
            transform: rotate(60deg);
            transition: 0.4s transform ease;
            color: var(--yellow);
            @media (max-width: 768px) {
              color: var(--black);
            }
          }
          :hover {
            .footer-arrow {
              transform: rotate(360deg);
            }
          }
        }
        @media screen and (max-width: 950px) {
          width: 50%;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
        }
        .footer-calendly-desktop {
          @media (max-width: 768px) {
            display: none;
          }
        }
        .footer-calendly-mobile {
          display: none;
          @media (max-width: 768px) {
            display: inline-block;
          }
        }
      }
      .footer-addresses {
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`

export default function MenuFooter() {
  const data = useStaticQuery(graphql`
    {
      menu: wpCptPage(slug: { eq: "menu" }) {
        menu {
          addesses {
            address
          }
          hireUs {
            emailAddress
            text
          }
          workWithUs {
            emailAddress
            text
          }
          socialLinks {
            socialLink {
              link
              text
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <MenuFooterStyles>
        <div className="menu-contact">
          <div className="menu-contact-inner">
            {data?.menu?.menu?.addesses?.map((a, i) => {
              return (
                <div
                  key={i}
                  className="html footer-address footer-addresses"
                  dangerouslySetInnerHTML={{ __html: a?.address }}
                />
              )
            })}
            <div className="footer-address">
              <h3 style={{ marginBottom: 20 }}>
                {data?.menu?.menu?.hireUs?.text}
              </h3>
              {/* <CalendlyButton className="footer-calendly-desktop" />
              <CalendlyButton alt className="footer-calendly-mobile" />
              <br /> */}
              <EmailButton className="footer-calendly-desktop" />
              <EmailButton alt className="footer-calendly-mobile" />
              <h3 style={{ marginBottom: 20 }}>
                {data?.menu?.menu?.workWithUs?.text}
              </h3>
              <a href={`mailto:${data?.menu?.menu?.workWithUs?.emailAddress}`}>
                {data?.menu?.menu?.workWithUs?.emailAddress}
              </a>
            </div>
            <div className="footer-address">
              <h3 style={{ marginBottom: 20 }}>Follow us</h3>
              {data?.menu?.menu?.socialLinks?.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    <a
                      className="nostyle social-link"
                      href={l?.socialLink?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="footer-arrow">&rarr;</span>{" "}
                      {l?.socialLink?.text}
                    </a>
                    <br />
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </MenuFooterStyles>
    </>
  )
}
