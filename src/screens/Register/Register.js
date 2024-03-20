import React, { useEffect, useState } from "react";
import "./Register.css";
import Nav from "../../directives/Header/Nav";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import registerImg from "../../assets/registerImg.jpg";
import Footer from "../../directives/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigatepage =useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    address: "",
    zipcode: "",
    note: ""

  });

  const [otp, setOtp] = useState(["", "", "", ""]);

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
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append('phone', formData.phone);

      const response = await fetch(
        "https://handpumpking.digiatto.online/api/user/register",
        {
          method: "POST",
          body: formDataToSend,
        }
      );


      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      const data = await response.json();
      handleShow();
      // localStorage.setItem("registeredUserData", JSON.stringify(data));
      console.log("Form data submitted successfully", data);



    } catch (error) {
      console.error("Error:", error);
    }
  };

const RegisterOtpVerify = async (e)=>{
  const stageDetailsArray = otp.map(Number);
  const otpNumber = parseInt(stageDetailsArray.join(''), 10);
  console.log("Submitted OTP:", otpNumber);


  try {
    const formDataToSend = new FormData();

    formDataToSend.append('name', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone_number', formData.phone);
    formDataToSend.append('otp', otpNumber);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('zip_code', formData.zipcode);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('notes', formData.note);

    const response = await fetch(
      "https://handpumpking.digiatto.online/api/user/otp_verify",
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
      <div className="section-padding">
        <Container>
          <div className="register-area">
            <Row>
              <Col lg={5}>
                <img src={registerImg} className="register-img" alt="Registration"></img>
              </Col>
              <Col lg={7}>
                <div className="registration-fields">
                  <h4>Registration Form</h4>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={6}>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          name="username"
                          className="form-control"
                          value={formData.username}
                          onChange={handleInputChange}
                        ></input>



                        <input
                          type="text"
                          placeholder="Enter Your country"
                          className="form-control"
                          name='country'
                          value={formData.country}
                          onChange={handleInputChange}
                        ></input>

                        <input
                          type="text"
                          placeholder="Enter Your city"
                          className="form-control"
                          name='city'
                          value={formData.city}
                          onChange={handleInputChange}
                        ></input>

                        <input
                          type="text"
                          placeholder="Enter Your zip code"
                          className="form-control"
                          name='zipcode'
                          value={formData.zipcode}
                          onChange={handleInputChange}
                        ></input>
                      </Col>
                      <Col lg={6}>
                        <input
                          type="email"
                          placeholder="Enter Your email"
                          className="form-control"
                          name='email'
                          value={formData.email}
                          onChange={handleInputChange}
                        ></input>

                        <input
                          type="text"
                          placeholder="Enter Your state"
                          className="form-control"
                          name='state'
                          value={formData.state}
                          onChange={handleInputChange}
                        ></input>

                        <input
                          type="text"
                          placeholder="Enter Your Address"
                          className="form-control"
                          name='address'
                          value={formData.address}
                          onChange={handleInputChange}
                        ></input>
                        <select className="form-control" name='gender' value={formData.gender}
                          onChange={handleInputChange}>
                          <option>Choose..</option>

                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                          <option value='Other'>Other</option>

                        </select>



                      </Col>
                    </Row>
                    <input
                      type="number"
                      placeholder="Enter Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      maxlength='10'
                    ></input>

                    <textarea
                      type="text"
                      placeholder="Enter note"
                      name="note"
                      className="form-control"
                      cols="50"
                      rows="3"
                      value={formData.note}
                      onChange={handleInputChange}
                    ></textarea>
                    <br />
                    <button type="submit" className="continue-btn">Continue</button>
                  </form>

                </div>
              </Col>
            </Row>
          </div>
        </Container>
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


      <Footer />
    </div>

  );
};

export default Register;







