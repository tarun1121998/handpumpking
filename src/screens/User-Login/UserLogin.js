import React from "react";
import "./UserLogin.css";
import Nav from "../../directives/Header/Nav";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div>
      <Nav />
      <div className="login-bg">
        <div className="login-area">
          <div className="login-fields">
            <h4>Login Form</h4>
            <form>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="username"
              ></input>

              <input
                type="email"
                placeholder="Enter Email Address"
                name="email"
              ></input>

              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              ></input>

              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
              ></input>
              <div className="forgot-pass">
                <p>Forgot Password?</p>
              </div>
          <Link to="/UserLoginOtp"> <button type="submit" className="continue-login-btn">
                Continue
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
