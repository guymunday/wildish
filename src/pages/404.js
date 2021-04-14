import * as React from "react";
import { navigate } from "gatsby-link";

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/");
  });

  return <></>;
};

export default NotFoundPage;
