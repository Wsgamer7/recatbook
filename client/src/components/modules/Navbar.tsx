import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";
type NavbarProps = {
  userId: string;
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
    </nav>
  );
};
export default Navbar;
