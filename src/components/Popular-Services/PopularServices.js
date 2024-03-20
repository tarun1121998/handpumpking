import React from 'react';
import { Col, Row } from "react-bootstrap";
import "./PopularServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import category1 from "../../assets/category1.jpg";
import category2 from "../../assets/category2.jpg";
import category3 from "../../assets/category3.jpg";
import category4 from "../../assets/category4.jpg";
import Card from "react-bootstrap/Card";

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
  

const PopularServices = () => {
  return (
    <div>
         <Row>
        <Col lg={8}>
          <div className="popular-service-head">
            <h3>Most Popular Services</h3>
            <p>Explore the greates our services. You won’t be disappointed</p>
          </div>
        </Col>
        <Col lg={4}>
            <div className="popular-service-btn">
            <button >View All <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </Col>
      </Row>
      <Carousel responsive={responsive}>
        <div>
          <div className="service-box">
            <Card style={{ width: "20rem", border: "none", boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
              <Card.Img variant="top" src={category1} />
              <Card.Body>
                <Card.Title>Electric Panel Repairing Service </Card.Title>
                <Card.Text>
                    <div className="card-address">
                 <p>Vijay nagar, Indore</p>
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
                <Card.Title>Electric Panel Repairing Service</Card.Title>
                <Card.Text>
                <div className="card-address">
                 <p>Vijay nagar, Indore</p>
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
                <Card.Title>Electric Panel Repairing Service</Card.Title>
                <Card.Text>
                <div className="card-address">
                 <p>Vijay nagar, Indore</p>
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
                <Card.Title>Electric Panel Repairing Service</Card.Title>
                <Card.Text>
                <div className="card-address">
                 <p>Vijay nagar, Indore</p>
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
                <Card.Title>Electric Panel Repairing Service</Card.Title>
                <Card.Text>
                <div className="card-address">
                 <p>Vijay nagar, Indore</p>
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
    </div>
  )
}

export default PopularServices;