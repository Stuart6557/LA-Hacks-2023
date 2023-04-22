import "../styles/flip-card.css";
import { useState } from "react";

export default function FlipCard() {
	const [flip, setFlip] = useState(false);

	return (
		<div className="flip-card" onClick={ () => setFlip(!flip) }>
			<div className={`flip-card-back ${flip ? "flipped": ""}`}>Back</div>
			<div className={`flip-card-front ${flip ? "flipped": ""}`}>Front</div>
		</div>
	);
}
