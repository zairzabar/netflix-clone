import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="signupscreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signup_gray">New to Netflix? </span>Sign up now.
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
