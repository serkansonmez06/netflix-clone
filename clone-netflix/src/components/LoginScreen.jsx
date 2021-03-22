import React, { useState } from "react";
import "../App.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
          alt=""
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {/* this condtion indicate if signIn is true show text and input field after onclick event route to signup page */}
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  {" "}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
