import "../styles/guides.css";
import Guides from "../components/Guides";
import Landing from "../components/Landing";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="Home">
      <Landing />
      {currentUser == null ? <></> : <Guides />}
    </div>
  );
}
