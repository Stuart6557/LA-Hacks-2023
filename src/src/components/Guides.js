import "../styles/guides.css";
import FlipCard from "../components/FlipCard";
import CompostIcon from "../icons/CompostIcon";
import WasteIcon from "../icons/WasteIcon";
import RecycleIcon from "../icons/RecycleIcon";

export default function Guides() {
	return (
		<div className="Guides">
			<FlipCard 
				title="compost" 
				description="Compost is decayed organic material used as plant fertilizer."
				bullet1 = "lalallalllalalalalallalallala"
				bullet2 = "lalallalalallalallallalallala"
				bullet3 = "lalallalaallalalaallalalallaa"
				icon={<CompostIcon />}></FlipCard>
			<FlipCard 
				title="recycle"
				description="Compost is decayed organic material used as plant fertilizer."
				bullet1 = "lalallalllalalalaallalalal"
				bullet2 = "lalallalalallalalallalalal"
				bullet3 = "lalallalaallalallalalalala"
				icon={<RecycleIcon />}></FlipCard>
			<FlipCard 
				title="waste"
				description="Compost is decayed organic material used as plant fertilizer."
				bullet1 = "lalallalllalalalalalalalla"
				bullet2 = "lalallalalallalalalalalall"
				bullet3 = "lalallalaallalalalalallala"
				icon={<WasteIcon />}></FlipCard>
				
		</div>
	);
}