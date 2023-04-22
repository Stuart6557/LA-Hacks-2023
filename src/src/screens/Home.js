import "../styles/guides.css";
import Guides from "../components/Guides";
import Landing from  "../components/Landing";

export default function Home() {
	return (
		<div className="Home">
			<Landing />
      <Guides />
		</div>
	);
}