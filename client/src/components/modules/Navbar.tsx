import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "395785444978-7b9v7l0ap2h3308528vu1ddnt3rqftjc.apps.googleusercontent.com";

import "./NavBar.css";
type NavbarProps = {
  userId: string;
  handleLogin: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  handleLogout: () => void;
};
const Navbar = (props: NavbarProps) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-brand">Recatbook</div>
      <div className="NavBar-linkContainer">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        <Link to="/profile" className="NavBar-link">
          Profile
        </Link>
      </div>
      {props.userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={props.handleLogout}
          className="NavBar-link"
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={props.handleLogin}
          className="NavBar-link"
        />
      )}
    </nav>
  );
};
export default Navbar;
