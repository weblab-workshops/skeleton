import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import "./Skeleton.css";

//TODO(weblab student): REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "FILL ME IN";

type Props = {
  userId?: string;
  handleLogin: (credentialResponse: CredentialResponse) => void;
  handleLogout: () => void;
};
const Skeleton = (props: Props) => {
  const { handleLogin, handleLogout } = props;

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {props.userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={() => console.log("Error Logging in")} />
      )}
      <h1>Good luck on your project :)</h1>
      <h2> What we provide in this skeleton</h2>
      <ul>
        <li>Google Auth (Skeleton.js & auth.js)</li>
        <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
        <li>User Model (auth.js & user.js)</li>
      </ul>
      <h2> What you need to change</h2>
      <ul>
        <li>Change the font in utilities.css</li>
        <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
        <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
        <li>Change the Database SRV for Atlas (server.js)</li>
        <li>Change the Database Name for MongoDB (server.js)</li>
        <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
        <li>Update website title in client/dist/index.html</li>
      </ul>
    </GoogleOAuthProvider>
  );
};

export default Skeleton;
