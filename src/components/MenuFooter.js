import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import CalendlyButton from "./CalendlyButton";

const MenuFooterStyles = styled.nav`
  a,
  p {
    font-size: 18px;
  }
  .menu-contact {
    min-height: 40vh;
    background: #000;
    color: #fff;
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
          .footer-arrow {
            transition: 0.4s transform ease;
          }
          :hover {
            .footer-arrow {
              display: inline-block;
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
      }
    }
  }
`;

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
  `);

  return (
    <>
      <MenuFooterStyles>
        <div className="menu-contact">
          <div className="menu-contact-inner">
            {data?.menu?.menu?.addesses?.map((a, i) => {
              return (
                <div
                  key={i}
                  className="html footer-address"
                  dangerouslySetInnerHTML={{ __html: a?.address }}
                />
              );
            })}
            <div className="footer-address">
              <h3 style={{ marginBottom: 20 }}>
                {data?.menu?.menu?.hireUs?.text}
              </h3>
              <a href={`mailto:${data?.menu?.menu?.hireUs?.emailAddress}`}>
                {data?.menu?.menu?.hireUs?.emailAddress}
              </a>
              <br />
              <CalendlyButton />
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
                  <>
                    <a
                      className="nostyle social-link"
                      href={l?.socialLink?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className="footer-arrow"
                        style={{ color: "var(--yellow)" }}
                      >
                        &rarr;
                      </span>{" "}
                      {l?.socialLink?.text}
                    </a>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </MenuFooterStyles>
    </>
  );
}
