import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser } = useAuth();

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h2>GREEN GUIDE</h2>
        </Link>
        <nav className="navlinks">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          {currentUser == null ? (
            <></>
          ) : (
            <Link to="/game">
              <h4>Mini Game</h4>
            </Link>
          )}
          {currentUser == null ? (
            <></>
          ) : (
            <Link to="/tracker">
              <h4>Tracker</h4>
            </Link>
          )}
          {currentUser == null ? (
            <Link to="/login">
              <h4>Login / Sign Up</h4>
            </Link>
          ) : (
            <Link to="/profile">
              <h4>Profile</h4>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
