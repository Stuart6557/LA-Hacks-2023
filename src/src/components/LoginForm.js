import "../styles/login-signup.css";
import profile from "./../images/frog-profile.jpeg";
import email from "./../images/mail.png";
import pass from "./../images/lock.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode ${errorCode}`);
      console.log(`errorMessage ${errorMessage}`);
    })
    console.log("here it working");
	}

	return (
    <form className='form' onSubmit={signIn}>
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
                type="email"
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
              <button onClick={signIn}>Sign in</button>
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