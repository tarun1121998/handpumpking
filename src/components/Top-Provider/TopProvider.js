import React from 'react'
import { Col, Row } from "react-bootstrap";
import "./TopProvider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import category1 from "../../assets/category1.jpg";
import category2 from "../../assets/category2.jpg";
import category3 from "../../assets/category3.jpg";
import category4 from "../../assets/category4.jpg";
import Card from "react-bootstrap/Card";
import offerMan from "../../assets/offerMan.png"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TopProvider = () => {
  return (
    <div>
      
          <div className="feature-service-head">
            <h3>Top Providers</h3>
            <p>Meet Our Experts</p>
          </div>
   
      <Carousel responsive={responsive}>
        <div>
          <div className="service-box">
            <Card style={{ width: "20rem", border: "none", boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
              <Card.Img variant="top" src={category1} />
              <Card.Body>
            
                <Card.Text>
                    <div className="card-address">
                 <h4>Shristi Sharma</h4>
                 <p>4.0</p>
                 </div>
                 <div className="card-address">
                 <h4>$23.00</h4>
                 <p>Book Now</p>
                 </div>

                </Card.Text>
              
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          {" "}
          <div className="service-box">
            <Card style={{ width: "20rem", border: "none", boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"  }}>
              <Card.Img variant="top" src={category4} />
              <Card.Body>
               
                <Card.Text>
                <div className="card-address">
                <h4>Shristi Sharma</h4>
                 <p>4.0</p>
                 </div>
                 <div className="card-address">
                 <h4>$23.00</h4>
                 <p>Book Now</p>
                 </div>

                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        </div>

        <div>
          {" "}
          <div className="service-box">
            <Card style={{ width: "20rem", border: "none", boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"  }}>
              <Card.Img variant="top" src={category1} />
              <Card.Body>
             
                <Card.Text>
                <div className="card-address">
                <h4>Shristi Sharma</h4>
                 <p>4.0</p>
                 </div>
                 <div className="card-address">
                 <h4>$23.00</h4>
                 <p>Book Now</p>
                 </div>

                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          {" "}
          <div className="service-box">
            <Card style={{ width: "20rem", border: "none", boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"  }}>
              <Card.Img variant="top" src={category2} />
              <Card.Body>
              
                <Card.Text>
                <div className="card-address">
                <h4>Shristi Sharma</h4>
                 <p>4.0</p>
                 </div>
                 <div className="card-address">
                 <h4>$23.00</h4>
                 <p>Book Now</p>
                 </div>

                </Card.Text>
              
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          {" "}
          <div className="service-box">
            <Card style={{ width: "20rem" , border: "none", boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
              <Card.Img variant="top" src={category3} />
              <Card.Body>
               
                <Card.Text>
                <div className="card-address">
                <h4>Shristi Sharma</h4>
                 <p>4.0</p>
                 </div>
                 <div className="card-address">
                 <h4>$23.00</h4>
                 <p>Book Now</p>
                 </div>

                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        </div>
      </Carousel>


      {/* -------------------- Offer Banner ------------------ */}
<div className='section-padding'>
      <div className='offer-banner'>
      
  <div className='offer-blue-box'>
    <Row>
      <Col lg={5} md={5}>
        <img src={offerMan} className='offer-man'></img>
      </Col>
      <Col lg={7} md={7}>
        <div className='offer-content'>
        <h1>We Are Offering 14 Days Free Trial</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore minim veniam, quis nostrud exercitation ullamco magna aliqua.</p>
        <button className='offer-btn'>
          Contact Us
        </button>
                </div>
      </Col>
    </Row>
  </div>
  
      </div>
      </div>
    </div>
  )
}

export default TopProvider