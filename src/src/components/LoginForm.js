import "../styles/login-signup.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import profile from "./../images/frog-profile.jpeg";
import email from "./../images/mail.png";
import pass from "./../images/lock.png";
import SignUp from "../screens/SignUp";
import SignUpForm from "./SignupForm";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		console.log("temp");
	}

	return (
    <form className='form' onSubmit={ handleSubmit }>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
              </div>
            </div>

            <div>
              <h2>Login</h2>
              <img src={email} alt="email" className="email"/>
              <input
                type="text"
                placeholder="email" 
                className="name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input
                type="password" 
                placeholder="password" 
                className="name"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="login-button">
              <button>Sign in</button>
            </div>
        
            <p>Don't have an account?</p>
        
            <Link to="/signup" className="sign-up-link">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </form>
	);
};