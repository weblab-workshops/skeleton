import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

// Images
import MainLogo from "../images/MainLogo.webp";

//CSS files
import "./NavBar.css";

// Imported variables -------- This should be changed afterwards (used for another project)
const GOOGLE_CLIENT_ID = "375397322348-64k2rahhcrctb6gkojf4bdtuunrcp7th.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
  const googleLoginBtnRef = useRef(null);
  const handleCustomGoogleLogin = () => {
    if (googleLoginBtnRef.current) {
      googleLoginBtnRef.current.click();
    }
  };

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
      event.preventDefault();
      if (searchTerm.trim()) {
          navigate(`/searches?q=${encodeURIComponent(searchTerm)}`);
      }
  };

  return (

    // Google login feature
    <div className="NavBar-container">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          {userId ? (
            <button
              className="NavBar-login"
              onClick={() => {
                googleLogout();
                handleLogout();
              }}
            >
              Logout
            </button>
          ) : (
            <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
          )}
      </GoogleOAuthProvider>
    </div>

  );
};

  export default NavBar;
