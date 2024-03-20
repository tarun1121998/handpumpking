import React, { useEffect, useState } from "react";
import Nav from "../../directives/Header/Nav";
import { Col, Container, Row } from "react-bootstrap";
import "./ConsumerComplaint.css";
import Footer from "../../directives/Footer/Footer";

// import { Link } from "react-router-dom";
// import Otp from "../Register/Otp/Otp";

const Home = () => {
  const [issueTypes, setIssueTypes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectService, setSelectService] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    phone: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    fetch("https://handpumpking.digiatto.online/api/issue")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          setIssueTypes(data.types);
        } else {
          console.error("Error fetching data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });

    // ------------------- Select category --------------- //

    fetch("https://handpumpking.digiatto.online/api/category")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          setCategory(data.types);
        } else {
          console.error("Error fetching category");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });

    // ----------------------- Select Service API ------------------ //
    fetch("https://handpumpking.digiatto.online/api/service")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          setSelectService(data.types);
        } else {
          console.error("Error fetching service");
        }
      })
      .catch((error) => {
        console.error("Error");
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://handpumpking.digiatto.online/api/complaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        issue_type: "1",
        client: "1",
        category: "1",
      }),
    })
    .then((response)=> response.json())
    .then((data)=> {
      if(data.status === "200"){
    console.log("Complaint sumitted successfully");
    setFormData({
      
    })    
      }
    })
  };

  return (
    <div>
      <Nav />
      <Container>
        <div className="section-padding">
          <div className="complaint-form-head">
            <h2>Submit Your Complaint Online</h2>
            <p>
              {" "}
              An online consumer complaint is what this specific issue is known{" "}
            </p>
            <div className="section-padding">
              <div className="complaint-form-area">
                <div className="contact-form">
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      <form>
                        <Row>
                          <Col lg={12}>
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name :"
                            />
                          </Col>

                          <Col lg={12}>
                            {/* -------------------- Select Services ------------ */}
                            <select>
                              <option value="option1">Select Services</option>
                              {selectService.map((serviceOption) => (
                                <option
                                  key={serviceOption.id}
                                  value={serviceOption.type}
                                >
                                  {serviceOption.type}
                                </option>
                              ))}
                            </select>
                            {/* ---------------- Select Category ------------- */}
                            <select>
                              <option value="option1">Select Category</option>
                              {category.map((categoryOption) => (
                                <option
                                  key={categoryOption.id}
                                  value={categoryOption.name}
                                >
                                  {categoryOption.name}
                                </option>
                              ))}
                            </select>

                            {/* --------------------- Select Issue ------------------ */}
                            <select>
                              <option value="option1">Select Issue</option>

                              {issueTypes.map((issue) => (
                                <option key={issue.id} value={issue.type}>
                                  {issue.type}
                                </option>
                              ))}
                            </select>
                          </Col>
                          {/* --------------- Select State -------------- */}
                          <Col lg={6}>
                            <select>
                              <option value="option1">Select State</option>
                              <option value="option2">Option 1</option>
                              <option value="option3">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </Col>

                          {/* --------------- Select District -------------- */}
                          <Col lg={6}>
                            <select>
                              <option value="option1">Select District</option>
                              <option value="option2">Option 1</option>
                              <option value="option3">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </Col>

                          {/* ------------- Select Zone ------------ */}
                          <Col lg={6}>
                            <select>
                              <option value="option1">Select Zone</option>
                              <option value="option2">Option 1</option>
                              <option value="option3">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </Col>
                          <Col lg={6}>
                            <input
                              type="tel"
                              placeholder="+91-00000000"
                            ></input>
                          </Col>

                          <Col lg={12}>
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                            />
                            <textarea
                              name="message"
                              cols="10"
                              rows="3"
                              placeholder="Write Message :"
                            ></textarea>{" "}
                            <input type="submit" />
                          </Col>
                        </Row>
                      </form>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
