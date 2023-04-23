import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/landing.css";
import { useAuth } from "../contexts/AuthContext";

export default function Landing() {
  const { currentUser } = useAuth();

	return (
		<div className="landing">
			<br></br>
			<h1 className="header" >Landing Page</h1>
			<p>idk we can put like an about page or something</p>
      {!currentUser &&
      <Link to="/login">
        <button className="login"><b>Login / Sign Up</b></button>
      </Link>
      }
		</div>
	);
};
