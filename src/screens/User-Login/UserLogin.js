import React, { useState } from "react";
import "./UserLogin.css";
import Nav from "../../directives/Header/Nav";
import { Link } from "react-router-dom";

const UserLogin = () => {

const [phone,setPhone]=useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append('phone',phone);

      const response = await fetch(
        "handpumpking.digiatto.online/api/user/login",
        {
          method: "POST",
          body: formDataToSend,
        }
      );


      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      const data = await response.json();
      // localStorage.setItem("registeredUserData", JSON.stringify(data));
      console.log("Form data submitted successfully", data);



    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="login-bg">
        <div className="login-area">
          <div className="login-fields">
            <h4>Login Form</h4>
            <form>
              
              <input
                type="number"
                placeholder="Enter Your Phone"
                name="phone"
                onChange={(e)=>setPhone(e.target.value)}
                value={phone}
              ></input>

              {/* <input
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
              ></input> */}

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
