import React, { Component } from 'react';

import { RouteComponentProps } from "@reach/router";

class NotFound extends Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <h1>The page you are looking for is in another castle!</h1>
      </div>
    )
  }
}

export default NotFound;