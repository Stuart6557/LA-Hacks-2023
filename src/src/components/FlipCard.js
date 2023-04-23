import "../styles/flip-card.css";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function FlipCard({title, description, bullet1, bullet2, bullet3, icon, buttonText, link}) {
	const [flip, setFlip] = useState(false);

	return (
		<div className="flip-card" onClick={ () => setFlip(!flip) }>
			<div className={`flip-card-back ${flip ? "flipped": ""}`}>
				<h1>
					{title}
				</h1>
				<p>
					{description}
				</p>
				<div className="bullets">
          <ul>
            <li>{bullet1}</li>
            <li>{bullet2}</li>
            <li>{bullet3}</li>
          </ul>
    <br></br>
          <Link to={link}>
				    <button ><b>{buttonText}</b></button>
			    </Link>
				</div> 
    
			</div>
			<div className={`flip-card-front ${flip ? "flipped": ""}`}>
				<h1>
				{title}
				</h1>
				{icon}
			
			</div>
		</div>

	);
}
