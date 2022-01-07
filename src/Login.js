import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Styles/login.css";
import { auth } from "./firebase-config";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { handleLogin } from "ra-core/esm/sideEffect/auth";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [user1, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user1) {
      console.log("jjh", user1);
      history.replace("/home");
    }
  }, [user1, loading]);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [email, setemail] = useState("");
  const logout = async () => {
    await signOut(auth);
    console.log("sd");
  };
  return (
    <div>
      <div className="logintypes">
        <div className="register">
          <div className="typename">Register User</div>
          <div className="inputcont">
            <input
              type="email"
              className="userinfo"
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              type="password"
              className="userinfo"
              placeholder="Password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button onClick={register}> Signup</button>
          </div>
        </div>
        <div className="login">
          <div className="typename"> Login</div>
          <div className="inputcont">
            <input
              type="email"
              className="userinfo"
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              type="password"
              className="userinfo"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />

            <button onClick={login}> Login</button>
          </div>
        </div>
      </div>
      {/* 
      <h4> User Logged In: </h4>
      {user?.email}

      <button className="signout" onClick={logout}>
        {" "}
        Sign Out{" "}
      </button> */}
    </div>
  );
}

export default Login;
