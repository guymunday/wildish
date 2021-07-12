import * as React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

export default function CookiesBanner() {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        cookieName="cookies_settings"
        disableStyles={true}
        containerClasses="cookies-container"
        buttonWrapperClasses="cookies-buttons"
        contentClasses="cookies-inner"
      >
        <>
          This site uses cookies. <Link to="/privacy-policy">Learn more.</Link>
        </>
      </CookieConsent>
    </>
  );
}
