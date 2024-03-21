import React from "react";
import "./UserProfile.css";
import { Col, Container, Row } from "react-bootstrap";
import UserProfileImg from "../../assets/userProfileImg.avif";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Footer from "../../directives/Footer/Footer";
import NewNavbar from "../../directives/Header/NewNavbar";

const UserProfile = () => {

 const username = localStorage.getItem("username");
 const useremail = localStorage.getItem("email");
 const userphonenumber = localStorage.getItem("phoneNumber");
  return (
    <div>
       <NewNavbar/>
      <div className="section-padding">
        <Container>
        <div className="profile-banner">
          <Row>
            <Col lg={5} md={5}>
              <div className="profile-blue-bg">
                <img src={UserProfileImg} alt="user-profile"></img>
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div className="profile-white-bg">
                <h3>User Profile</h3>
                <p>
                  User profiles on a website is a great way to keep your
                  audience engaged.
                </p>

                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
            {/* ---------------------- Profile Details Tab -------------------- */}
                  <Tab eventKey="profile" title="Profile Update">
                    <div className="profile-detail">
                      <div className="profile-info">
                        <Row>
                          <Col lg={2}>
                            {" "}
                            <i class="fa-solid fa-user"></i>
                          </Col>{" "}
                          <Col lg={10}>
                            <p>{username}</p>
                          </Col>
                        </Row>
                      </div>

                      <div className="profile-info">
                        <Row>
                          <Col lg={2}>
                            {" "}
                            <i class="fa-solid fa-envelope"></i>{" "}
                          </Col>
                          <Col lg={10}>
                            <p>{useremail}</p>
                          </Col>
                        </Row>
                      </div>

                      <div className="profile-info">
                        <Row>
                          <Col lg={2} md={2}>
                            <i class="fa-solid fa-phone-volume"></i>{" "}
                          </Col>{" "}
                          <Col lg={10} md={10}>
                            <p>{userphonenumber}</p>
                          </Col>{" "}
                        </Row>
                      </div>
                    </div>
                  </Tab>

                  {/* ------------- Complaint History Tab ------------- */}
                  <Tab eventKey="complaint" title="Complaint History">
                  <div className="complaint-history-area">
                    <Row>
                        <Col lg={5}>
                    <div className="complaint-box">
                   <h3>51</h3>
                  <p>Total Complaints</p>
                    </div>
                    </Col>
                    <Col lg={5}>
                    <div className="complaint-box">
                   <h3>51</h3>
                  <p>Total Complaints</p>
                    </div>
                    </Col>
                    <Col lg={5}>
                    <div className="complaint-box">
                   <h3>51</h3>
                  <p>Total Complaints</p>
                    </div>
                    </Col>
                    </Row>
                  </div>
                  </Tab>

                  {/* --------------------- Help Tab ------------------- */}
                  <Tab eventKey="help" title="Help">
                    Tab content for Contact
                  </Tab>
                </Tabs>
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

export default UserProfile;
