import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  {
    /* Why we need a loading state:
			when we refresh our page, currentUser is initially null before being
			set to the current user. We don't want to render components when
			the user is null! */
  }
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setCurrentUser(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode ${errorCode}`);
        console.log(`errorMessage ${errorMessage}`);
        setCurrentUser(null);
        return null;
      });
  };

  const signup = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setCurrentUser(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode ${errorCode}`);
        console.log(`errorMessage ${errorMessage}`);
        setCurrentUser(null);
        return null;
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        const user = currentUser;
        setCurrentUser(null);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode ${errorCode}`);
        console.log(`errorMessage ${errorMessage}`);
        setCurrentUser(null);
        return null;
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
