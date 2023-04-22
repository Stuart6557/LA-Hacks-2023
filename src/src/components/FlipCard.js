import "../styles/flip-card.css";
import { useState } from "react";

export default function FlipCard() {
	const [flip, setFlip] = useState(false);

	// const flipToBack = () => {
	// 	setFlip(1);
	// 	console.log("flipped to back");
	// }

	// const flipToFront = () => {
	// 	setFlip(0);
	// 	console.log("flipped to front");
	// }

	return (
		<div className="flip-card" onClick={ () => setFlip(!flip) }>
			<div className={`flip-card-back ${flip ? "flipped": ""}`}>Back</div>
			<div className={`flip-card-front ${flip ? "flipped": ""}`}>Front</div>
		</div>

			// <div className="flip-card" onClick={ () => setFlip(!flip) }>
			// 	<div className={`flip-card-back ${flip ? "flipped": ""}`}>
			// 		{flip ? "flipped" : "not"}
			// 	</div>
			// 	<div className={`flip-card-front ${flip ? "flipped": ""}`}>
			// 		{flip ? "flipped" : "not"}
			// 	</div>
			// </div>

					// <div className={`flip-card ${flip === 1 ? "flip": "not-flip"}`}>
		// 	<div className="flip-card-inner">
		// 		<div className="flip-card-front" onClick={ flipToBack }>
		// 			<p>card front</p>
		// 		</div>
		// 		<div className="flip-card-back" onClick={ flipToFront }>
		// 			<p>card back</p>
		// 		</div>
		// 	</div>
		// </div>
		// <div className="flip-card" onClick={ () => setFlip(!flip) }>
	);
}
