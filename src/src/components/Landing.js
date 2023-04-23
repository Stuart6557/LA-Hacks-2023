import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/landing.css";
import { useAuth } from "../contexts/AuthContext";

export default function Landing() {
  const { currentUser } = useAuth();

	return (
		<div className="landing">
			<h1 className="header">Green Guide</h1>
			<p>..so you're here to save to planet. perfect.</p>
			<p>
				with increasing awareness and consciousness towards our environment
				and Earth, many mindful humans, like you, have taken this issue into
				our own hands. One of the easiest contributions we can all make is 
				recycling! Done correctly, recycling conserves trees, water, and minerals, 
				as well as diminishes greenhouse gases and carbon emissions.
			</p>
      {currentUser == null ?
        <p>
          Learn more about how to dispose of recycling and nonrecycling properly
          by joining the green team now!
        </p> :
        <div className="join-section">
          <br/>
          <p>
            Thanks for joining the green team! Scroll down to access our guide
            or head on over to our mini game.
          </p>
        </div>
      }
      
			{currentUser == null &&
				<Link to="/login">
					<button className="login"><b>Login / Sign Up</b></button>
				</Link>
			}
		</div>
	);
};
