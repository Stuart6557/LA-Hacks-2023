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
				description="Compost is decayed organic material used as plant fertilizer. This includes:"
				bullet1 = "food scraps"
				bullet2 = "soiled uncoated paper"
				bullet3 = "noncoated paper plates"
				icon={<CompostIcon />}
				buttonText="Learn how to make your own compost box!"
				link="https://sosfuture.org/blogs/news/how-to-compost-at-home?gclid=Cj0KCQjwi46iBhDyARIsAE3nVrZlNS5e-MgWu7Ny8eogOn8V0Y3g2MleeU6Rpl4QCWxaoOJHK0mLF78aAlGqEALw_wcB"></FlipCard>
			<FlipCard 
				title="recycle"
				description="By recycling we can turn waste into reusable material. Some reminders:"
				bullet1 = "paper, plastic, and glass are recyclable"
				bullet2 = "rinse liquid before recycling a container"
				bullet3 = "recyclable material must be bigger than a yogurt lid (about 2 inches)"
				icon={<RecycleIcon />}
				buttonText="Find recycling centers near you!"
				link="https://www.epa.gov/recycle"
				></FlipCard>
				
			<FlipCard 
				title="waste"
				description="Make sure to throw your trash away so it doesn't end up in the ocean!"
				bullet1 = "make sure to pick up after yourself when you are outside"
				bullet2 = "trash will never be used again for any other purpose"
				bullet3 = "waste can include broken dishes, wrappers, plastic utensils, styrofoam, etc"
				icon={<WasteIcon />}
				buttonText="Help clean up waste in your community!"
				link="https://www.nationalcleanupday.org/?gclid=Cj0KCQjwi46iBhDyARIsAE3nVrY-EmpT1OyLf1x2FeJVawrMn1AcWMqlri7_jHnFTfI0xSiX04UZ-DQaAoEREALw_wcB">
				</FlipCard>
				
				
		</div>
	);
}