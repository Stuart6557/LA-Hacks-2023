import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/navbar.css"
  
export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h2>NAME</h2>
        </Link>
        <nav className="navlinks">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/login">
            <p>Login / Sign Up</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};