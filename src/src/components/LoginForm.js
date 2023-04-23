import "../styles/login-signup.css";
import profile from "./../images/frog-profile.jpeg";
import email from "./../images/mail.png";
import pass from "./../images/lock.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
// import { AuthContext } from "../contexts/AuthContext";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

  // const auth = useContext(AuthContext);
  const auth = useAuth();
  // const { currentUser } = useAuth();

	// const logIn = (e) => {
	// 	e.preventDefault();
  //   signInWithEmailAndPassword(auth, username, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //     console.log(user);
  //   }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(`errorCode ${errorCode}`);
  //     console.log(`errorMessage ${errorMessage}`);
  //   })
  //   console.log("here it working");
	// }

  const handleSubmit = async (e) => {
    const user = await auth.login(username, password);
    return user;
  }

	return (
    <form className='form' onSubmit={handleSubmit}>
      {/* For testing purposes only */}
      {/* {currentUser.email} */}
      {/* {JSON.stringify(currentUser)} */}
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
              </div>
            </div>

            {/* <div> */}
              <h2>Login</h2>
              <img src={email} alt="email" className="email"/>
              <input
                type="email"
                placeholder="email" 
                className="name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            {/* </div> */}

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
              <Link to="/"><button onClick={handleSubmit}>Sign in</button></Link>
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