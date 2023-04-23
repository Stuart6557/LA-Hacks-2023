import React from "react";
import background from "./../images/green-background.jpg";
import "../styles/login-signup.css";
import TrackerCircle from "../components/TrackerCircle";

export default function Tracker() {
	return (
        <div style={{ backgroundImage: `url(${background})` }}>
           <TrackerCircle />
        </div>
	);
}