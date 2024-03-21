import React, { useEffect, useState } from "react";
import "./UserLogin.css";
import Nav from "../../directives/Header/Nav";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import loginPageImg from "../../assets/loginPageImg.jpg"
import Footer from "../../directives/Footer/Footer";

const UserLogin = () => {
  const navigatepage =useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("phone", phone);

      const response = await fetch(
        "https://handpumpking.digiatto.online/api/user/login",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      const data = await response.json();
      handleShow()
      // localStorage.setItem("registeredUserData", JSON.stringify(data));
      console.log("Form data submitted successfully", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const digitInputs = document.querySelectorAll('.digit-group input');
    digitInputs.forEach((input, index) => {
      input.addEventListener('keydown', (e) => {
        if ((e.keyCode === 8 || e.keyCode === 37) && index > 0) {
          const prevInput = document.getElementById(`digit-${index}`);
          if (prevInput) {
            prevInput.focus();
          }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
          const nextInput = document.getElementById(`digit-${index + 2}`);
          if (nextInput) {
            nextInput.focus();
          } else {
            const parent = input.closest('.digit-group');
            if (parent.dataset.autosubmit) {
              parent.submit();
            }
          }
        }
      });
    });
  }, []);
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < otp.length - 1) {
     
      const nextInput = document.getElementById(`digit-${index + 2}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const RegisterOtpVerify = async (e)=>{
    const stageDetailsArray = otp.map(Number);
    const otpNumber = parseInt(stageDetailsArray.join(''), 10);
    console.log("Submitted OTP:", otpNumber);
  
  
    try {
      const formDataToSend = new FormData();
  
   
      formDataToSend.append('phone_number',phone);
      formDataToSend.append('otp', otpNumber);
     
  
      const response = await fetch(
        "https://handpumpking.digiatto.online/api/user/otp_verify1",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
  
  
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      const data = await response.json();
  
      localStorage.setItem("username", data.data.name);
      localStorage.setItem("userid", data.data.id);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("phoneNumber",data.data.phone_number);
      navigatepage('/')
      // localStorage.setItem("registeredUserData", JSON.stringify(formData));
      console.log("Form data submitted successfully", data);
  
  
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <Nav />
      <Container>
        <div className="login-bg">
          <Row>
            <Col lg={5}>
              <div className="section-padding">
                <div className="login-page-image">
                  <img src={loginPageImg} ></img>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="section-padding">
                <div className="login-area">
                  <div className="login-fields">
                    <h4>Login Form</h4>
                    {/* <form> */}
                      <input
                        type="number"
                        placeholder="Enter Your Phone"
                        className="form-control"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      ></input>

                      

                      <div className="forgot-pass">
                        <p>Forgot Password?</p>
                      </div>
                   
                      {/* </form> */}

                        <button type="submit" className="continue-login-btn"
                         onClick={handleSubmit}>
                          Continue
                        </button>
                      
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Register Otp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
        <div className="digit-group text-center" data-group-name="digits" data-autosubmit="false" autoComplete="off">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`digit-${index + 1}`}
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={RegisterOtpVerify}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
      <Footer />
    </div>
  );
};
export default UserLogin;
