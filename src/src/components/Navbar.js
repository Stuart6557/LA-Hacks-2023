import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
  
export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h2>NAVIGATION BAR</h2>
        </Link>
        <nav className="navlinks">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/login">
            <h4>Login / Sign Up</h4>
          </Link>
        </nav>
      </div>
    </header>
  );
};