import "../styles/profile.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const auth = useAuth();
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    const user = await auth.logout();
    return user;
  };

  return (
    <div className="profile-screen">
      <div className="profile-card">
        <h3>Account Details</h3>
        <p>{currentUser && `Email: ${currentUser.email}`}</p>
        <Link to="/">
          <button onClick={handleSubmit}>Log Out</button>
        </Link>
      </div>
    </div>
  );
}
