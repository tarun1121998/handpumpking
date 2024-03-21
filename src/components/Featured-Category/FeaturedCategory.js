import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./FeaturedCategory.css";
import { Link } from "react-router-dom";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://handpumpking.digiatto.online/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.types);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const renderCategory = () => {
    return categories.map((category) => {
      return (
        <Link to="/ConsumerComplaint">
          {" "}
          <div key={category.type}>
            <a className="category-box">
              <div>
                <h5>{category.name}</h5>
              </div>
              <div className="feature-overlay"></div>
            </a>
          </div>
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="section-padding">
        <div className="fetured-category-head">
          <h3>Featured Categories</h3>
          <p>What do you need to find?</p>
        </div>

        {/* -------------- Category Box --------- */}

        <div className="category-all-box">{renderCategory()}</div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
