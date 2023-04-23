import React, {useEffect, useState} from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  });

  return (
    <div>{authUser ? <p>{`signed in as ${authUser.email}`}</p> : <p>signed out</p>}</div>
  );
};