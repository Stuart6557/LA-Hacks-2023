import "../styles/login-signup.css";
import profile from "./../images/frog-profile.jpeg";
import email from "./../images/mail.jpeg";
import pass from "./../images/lock.png";
import { useState } from "react";

export default function SignUpForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = () => {
		console.log("temp");
	}

	return (
		<form className='login-form' onSubmit={ handleSubmit }>

      <div className="main">
     <div className="sub-main">
       <div>
        <div className="imgs">
           <div className="container-image">
           <img src={profile} alt="profile" className="profile"/>

        </div>


        </div>
        <div>
           <h1>Sign Up Page</h1>
           <div>
              <img src={email} alt="email" className="email"/>
              <input
                  type="text" 
                  placeholder="user name" 
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
            <button>Sign Up</button>
          </div>
           
 
         </div>
       </div>
     </div>
    </div>
    </form>
	);
}