import "../styles/flip-card.css";
import { useState } from "react";

export default function FlipCard({title, description, bullet1, bullet2, bullet3, icon, color, buttonText}) {
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
				</div>  
				
			</div>
			<div className={`flip-card-front ${flip ? "flipped": ""}`}>
				<h1>
				{title}
				</h1>
				<div class="icon">
				{icon}
				</div>
			</div>
		</div>

	);
}
