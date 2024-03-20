import React from "react";
import "./PricingPlan.css";

const PricingPlan = () => {
  return (
    <div>
      <div className="pricing-area">
        <div className="pricing-head">
          <h3>Pricing Plans</h3>
          <p>Aliquam lorem ante, dapibus in, viverra quis</p>
        </div>

        <div className="pricing-box-area">
          {/* --- First --- */}

          <div className="pricing-box">
            <h4>Basic</h4>
            <p>Lorem ipsum dolor amet, consectetur .</p>
            <div className="pricing-list">
              <ul>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
              </ul>
            </div>
            <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          {/* --- Second --- */}

          <div className="pricing-box">
            <h4>Standard </h4>
            <p>Lorem ipsum dolor amet, consect.</p>
            <div className="pricing-list">
              <ul>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
              </ul>
            </div>
            <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          {/* --- Third --- */}

          <div className="pricing-box">
            <h4>Premium</h4>
            <p>Lorem ipsum dolor amet, consectetur </p>
            <div className="pricing-list">
              <ul>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  Sed perspiciatis unde omnis natus error
                </li>
              </ul>
            </div>
            <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
