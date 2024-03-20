import React from "react";
import "./MapInfo.css";
import mpMap from "../../assets/mpMap.png";
import qoutesTags from "../../assets/qoutesTags.png";
import { Col, Container, Row } from "react-bootstrap";

const MapInfo = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* ----- Map Image ---- */}
          <Col lg={6}>
            <div className="mp-map" style={{ visibility: "visible", animationName: "bounceInLeft" }}>
              <h3> Map Of Madhya Pradesh</h3>
              <div className="map-img">
                <img src={mpMap} />
              </div>
            </div>
          </Col>

          
          {/* --------- Map Details ------- */}
          <Col lg={6}>
            <div className="map-details">
              <h3>Satisfactory Solution</h3>
            </div>
            <div className="map-detail-area">
              <div className="tags">
                <img src={qoutesTags} alt="tags" />
              </div>
              <div className="map-content">
              <h6>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapInfo;
