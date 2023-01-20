import React from "react";

import { RouteComponentProps } from "@reach/router";

type NotFoundProps = RouteComponentProps;

const NotFound = (props: NotFoundProps) => {
  return (
    <div>
      <h1>The page you are looking for is in another castle!</h1>
    </div>
  );
};

export default NotFound;
