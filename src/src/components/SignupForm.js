import "../styles/login-signup.css";
import profile from "./../images/frog-profile.jpeg";
import email from "./../images/mail.png";
import pass from "./../images/lock.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function SignUpForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

  const auth = useAuth();

	// const signUp = (e) => {
  //   e.preventDefault();

  //   if(password===confirmPassword) {
  //     createUserWithEmailAndPassword(auth, username, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(`errorCode ${errorCode}`);
  //       console.log(`errorMessage ${errorMessage}`);
  //     });
  //   } else {
  //     console.log("passwords don't match!");
  //   }
	// }

  const handleSubmit = async (e) => {
    if(password===confirmPassword) {
      const user = await auth.signup(username, password);
      return user;
    } else {
      console.log("passwords don't match!");
    }
  }

	return (
		<form className='form' onSubmit={handleSubmit}>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
              </div>
            </div>

            <h2>Sign Up</h2>
            <img src={email} alt="email" className="email"/>
            <input
              type="text" 
              placeholder="email" 
              className="name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

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

            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input
                type="password" 
                placeholder="confirm password" 
                className="name"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>

            <div className="login-button">
              <Link to="/"><button onClick={handleSubmit}>Sign Up</button></Link>
            </div>
          
            <p>Have an account? <Link to="/login" className="sign-up-link">Login</Link></p>
          </div>
        </div>
      </div>
    </form>
	);
};