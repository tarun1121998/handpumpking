import React, { useState } from "react";
import "./Register.css";
import Nav from "../../directives/Header/Nav";
import { Col, Container, Row } from "react-bootstrap";
import registerImg from "../../assets/registerImg.jpg";
import Footer from "../../directives/Footer/Footer";

const Register = () => {



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

  console.log("formData", formData);
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

      // localStorage.setItem("registeredUserData", JSON.stringify(data));
      localStorage.setItem("registeredUserData", JSON.stringify(formData));
      console.log("Form data submitted successfully", data);



    } catch (error) {
      console.error("Error:", error);
    }
  };

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
                      type="tel"
                      placeholder="Enter Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
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
      <Footer />
    </div>
  );
};

export default Register;
