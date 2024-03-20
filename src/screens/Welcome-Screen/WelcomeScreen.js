import React from "react";
import Nav from "../../directives/Header/Nav";
import "./WelcomeScreen.css";
import { Col, Container, Row } from "react-bootstrap";
import inbox from "../../assets/inbox.png";
import outbox from "../../assets/outbox.png";
import userIcon from "../../assets/userIcon.png";
import userSearch from "../../assets/userSearch.png";
import handIcon from "../../assets/handIcon.png";
import ComplaintIcon from "../../assets/ComplaintIcon.png";
import dashboardIcon from "../../assets/dashboardIcon.png";
import bannerImage1 from "../../assets/bannerImage1.png";
import bannerImage2 from "../../assets/bannerImage2.png";
import carouselImg3 from "../../assets/carouselImg3.jpg";
import FeaturedCategory from "../../components/Featured-Category/FeaturedCategory";
import FeaturedServices from "../../components/Featured-Services/FeaturedServices";
import TopProvider from "../../components/Top-Provider/TopProvider";
import HowWorks from "../../components/How-It-Works/HowWorks";
import ClientSays from "../../components/Client-Says/ClientSays";
import DownloadApp from "../../components/Download-App/DownloadApp";
import Footer from "../../directives/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import MapInfo from "../Map-Info/MapInfo";

const WelcomeScreen = () => {
  return (
    <div>
      <Nav />
      {/* ---------------------- Carousel -------------------- */}

      <Carousel>
        <Carousel.Item>
          <img className="carousel-img" src={bannerImage1} text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={bannerImage2}
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={carouselImg3} text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* -------------------- Carousel End ---------------- */}

      <div className="section-padding">
        <div className="details-area">
          <Row>
            <Col lg={6}>
              <div className="detail-box-head">
                <h3 className="blink-me">Details of total complaints</h3>
              </div>
              <div className="details-boxes">
                <div className="detail-box-1">
                  <Row>
                    <Col lg={4}>
                      <div className="inbox-img">
                        <img src={inbox} alt="inbox"></img>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="details-text">
                        <h5>Total Registered Complaints</h5>
                        <p>3312</p>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="detail-box-1">
                  <Row>
                    <Col lg={4}>
                      <div className="inbox-img">
                        <img src={outbox} alt="inbox"></img>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="details-text">
                        <h5>Total resolved complaints</h5>
                        <p>3312</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="details-boxes2">
                <div className="detail-box-2">
                  <Row>
                    <Col lg={4}>
                      <div className="inbox-img">
                        <img src={userIcon} alt="inbox"></img>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="details-text">
                        <h5>Online Users</h5>
                        <p>3312</p>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="detail-box-1">
                  <Row>
                    <Col lg={4}>
                      <div className="inbox-img">
                        <img src={userSearch} alt="inbox"></img>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="details-text">
                        <h5>Complaint Status</h5>
                        <p>3312</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            {/* ------------------ Detail Cards ----------------- */}
            <Col lg={6}>
              <div className="details-boxes">
                <div className="detail-card-1">
                  <div className="inbox-card-icon">
                    <img src={handIcon} alt="inbox" className="hand-icon"></img>
                  </div>

                  <div className="details-text">
                    <h5>Become a User</h5>
                  </div>
                </div>

                <div className="detail-card-2">
                  <div className="inbox-card-icon">
                    <img
                      src={ComplaintIcon}
                      alt="inbox"
                      className="hand-icon"
                    ></img>
                  </div>

                  <div className="details-text">
                    <h5>Make a Complaint</h5>
                  </div>
                </div>
              </div>

              <div className="details-boxes2">
                <div className="detail-card-3">
                  <div className="inbox-card-icon">
                    <img
                      src={dashboardIcon}
                      alt="inbox"
                      className="hand-icon"
                    ></img>
                  </div>

                  <div className="details-text">
                    <h5>Citizen Dashboard</h5>
                  </div>
                </div>

                <div className="detail-card-4">
                  <div className="inbox-card-icon">
                    <img
                      src={dashboardIcon}
                      alt="inbox"
                      className="hand-icon"
                    ></img>
                  </div>

                  <div className="details-text">
                    <h5>Citizen Dashboard</h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* -------------- Featured Category ---------------- */}
      <Container>
        <FeaturedCategory />

        <div className="section-padding">
          <FeaturedServices />
        </div>

        {/* <div className="section-padding">
          <TopProvider />
        </div> */}

        <div className="section-padding">
          <HowWorks />
        </div>

        <div className="section-padding">
          <ClientSays />
        </div>
        <div className="section-padding">
          <MapInfo/>
        </div>
        <div className="section-padding">
          <DownloadApp />
        </div>
      </Container>
   
        <Footer />
    
    </div>
  );
};

export default WelcomeScreen;
