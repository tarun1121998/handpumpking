import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FeaturedServices.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://handpumpking.digiatto.online/api/service")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data.types);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="feature-service-head">
        <h3>Featured Services</h3>
        <p>Explore the greatest services. You won’t be disappointed.</p>
      </div>

      <Carousel responsive={responsive}>
        {services.map((service, index) => (
          <Link to="/ConsumerComplaint">
            {" "}
            <Card key={service.id} className="service-card-area">
              <Card.Img
                variant="top"
                className="service-card-img"
                src={`https://handpumpking.digiatto.online/storage/${service.image}`}
              />
              <Card.Body>
                <Card.Title>{service.type}</Card.Title>
                <Card.Text>
                  {/* Additional dynamic content if needed */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedServices;
