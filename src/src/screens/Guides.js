import "../styles/guides.css";
import FlipCard from "../components/FlipCard";
import Landing from  "../components/Landing";

export default function Guides() {
	return (
		<>
		<Landing></Landing>
		<br></br>
		<div className="Guides">
			
			<FlipCard></FlipCard>
			<FlipCard></FlipCard>
			<FlipCard></FlipCard>
		</div>
		</>
	);
}