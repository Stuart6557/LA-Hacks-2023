import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/landing.css";

export default function Landing() {
	return (
		<div className="landing">
			<h1 className="header" >TITLE NAME HERE</h1>
			<p>..so you're here to save to planet. perfect. </p>
			<p>with increasing awareness and consciousness towards our environment
				and Earth, many mindful humans, like you, have taken this issue into
				our own hands. one of the easiest contributions we can all make is 
				recycling! done correctly, recycling conserves trees, water, and minerals, 
				as well as diminishes greenhouse gases and carbon emissions. learn more 
				about how to dispose of recycling and nonrecycling properly by joining INSERT
				TEAM NAME now!</p>
			<Link to="/login">
				<button classname="login"><b>Login / Sign Up</b></button>
			</Link>
		</div>
	);
};
