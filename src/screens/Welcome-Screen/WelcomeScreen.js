import React, { useEffect, useState } from "react";
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

// import FeaturedCategory from "../../components/Featured-Category/FeaturedCategory";
import FeaturedServices from "../../components/Featured-Services/FeaturedServices";
// import TopProvider from "../../components/Top-Provider/TopProvider";
import HowWorks from "../../components/How-It-Works/HowWorks";
import ClientSays from "../../components/Client-Says/ClientSays";
import DownloadApp from "../../components/Download-App/DownloadApp";
import Footer from "../../directives/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import MapInfo from "../Map-Info/MapInfo";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    fetch("https://handpumpking.digiatto.online/api/banner")
      .then((response) => response.json())
      .then((data) => {
        const bannerImages = data.data.filter((item) => item.type === "Banner");
        setBannerImages(bannerImages);
      })
      .catch((error) => console.error("Error fetching banners:", error));
  }, []);

  return (
    <div>
      <Nav />
      {/* ---------------------- Carousel -------------------- */}
<div className="banner-carousel">
      <Carousel>
        {bannerImages.map((banner) => (
          <Carousel.Item key={banner.id}>
            <img
              className="carousel-img"
              src={`https://handpumpking.digiatto.online${banner.image}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      {/* -------------------- Carousel End ---------------- */}

      <div class="marquee">
        <p>Register a complaint about your hand pump repair by clicking here.
       <Link to="/ConsumerComplaint"> <button>Click here</button> </Link>  </p>
    </div>


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

      {/* <FeaturedCategory /> */}

      <div className="section-padding">
        <FeaturedServices />
      </div>

      <Container>
        <div className="section-padding">
          <HowWorks />
        </div>

        <div className="section-padding">
          <ClientSays />
        </div>
      </Container>
      <div className="section-padding">
        <MapInfo />
      </div>

      <div className="section-padding">
        <DownloadApp />
      </div>

      <Footer />
    </div>
  );
};

export default WelcomeScreen;
