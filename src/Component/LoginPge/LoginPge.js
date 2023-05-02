import React, { useState } from "react";
import loginPageStyle from "./LoginPage.module.css";
import { auth } from "../FiresBase/firebase";
import { useNavigate } from "react-router-dom";
// import image from "../../assets/"

// import { auth } from "../FiresBase";

const LoginPge = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  let SignInFun = () => {
    // auth.

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("login ");

        navigate("/");
      })
      .catch((error) => alert("Error"));
  };

  let CreateNewFun = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Register Page ");

        navigate("/");
      })
      .catch((error) => alert("Error"));
  };

  return (
    <div className={loginPageStyle.LoginPge}>
      <div className={loginPageStyle.body}>
        <form className={loginPageStyle.form}>
          <div className={loginPageStyle.imagge}>
            {/* <img src={}></img> */}
          </div>
          <h1 className={loginPageStyle.signIn}>Sign in</h1>
          {/* <div className={loginPageStyle.inputSingle}>
            <label htmlFor="">Name:</label>
            <input type="text" placeholder="Enter Your Name" />
          </div> */}
          <div className={loginPageStyle.inputSingle}>
            <label htmlFor="">E-Mail:</label>
            <input
              type="email"
              value={email}
              placeholder="Enter Your E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={loginPageStyle.inputSingle}>
            <label htmlFor="">PassWord:</label>
            <input
              type="password"
              value={password}
              placeholder="Enter Your PassWord"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className={loginPageStyle.inputSingle}>
            <label htmlFor="">ASSASDADSADDA:</label>
            <input type="text" placeholder="Enter Your ASSASDADSADDA" />
          </div> */}
          <div className={loginPageStyle.buttt}>
            <button
              className={loginPageStyle.inputSingle}
              onClick={(e) => {
                e.preventDefault();
                SignInFun();
              }}
            >
              Sign in
            </button>
          </div>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <div className={`${loginPageStyle.buttt}`}>
            <button
              className={`${loginPageStyle.createBut}`}
              onClick={(e) => {
                e.preventDefault();
                CreateNewFun();
              }}
            >
              Create New Acounte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPge;
