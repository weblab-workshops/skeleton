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
    <div className="NavBar-container">
      <div className="NavBar-logo">
        <Link to="">
          <img
            className = "NavBar-logo-img"
            src={MainLogo}
            alt="Main logo of Wopanaak Language Reclamation project"
          />
        </Link>
      </div>
      <form className="NavBar-search" onSubmit={handleSearch}>
        <select className="NavBar-search-select">
            <option value="">All Languages</option>
            <option value="">English only</option>
            <option value="">Wôpanaâk only</option>
        </select>
        <input
            className="NavBar-search-bar"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="NavBar-account">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            {userId ? (
              <button
                className="NavBar-logout"
                onClick={() => {
                  googleLogout();
                  handleLogout();
                }}
              >
                Logout
              </button>
            ) : (
              <div className="NavBar-login">
                <GoogleLogin
                  onSuccess={handleLogin}
                  onError={(err) => console.log(err)}
                />
              </div>
            )}
        </GoogleOAuthProvider>
      </div>
    </div>

  );
};

  export default NavBar;
