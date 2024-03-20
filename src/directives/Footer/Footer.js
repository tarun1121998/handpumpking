import React from 'react';
import "./Footer.css";
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
        
        <div className='footer-area'>
            <Container>
            <div>
                <Row>
                    <Col lg={3} md={4}>
              <h4 className='footer-head'>HandPump Logo</h4>
              <p>Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor commodo consequat.</p>
                    </Col>
                    <Col lg={3} md={4}>
                        <h4 className='footer-head'>Quick Link</h4>
                        <div className='footer-list'>
                        <ul>
                            <li>About Us </li>
                            <li>Contact Us</li>
                            <li>Help</li>
                        </ul>
                        </div>  
                    </Col>
                    <Col lg={3} md={4}>
                    <h4 className='footer-head'>Contact Us </h4>
                    <div className='footer-list'>
                        <ul>
        <li><i class="fa-solid fa-location-dot"></i> 367 Hillcrest Lane, Irvine, California, United States</li>
            <li><i class="fa-solid fa-phone"></i> 9876543221</li>
            <li><i class="fa-solid fa-envelope"></i> truelysell@example.com</li>
                        </ul> 
                        </div>  
                    </Col>
                    <Col lg={3} md={4}>
                    <h4 className='footer-head'>Follow Us</h4>
                   <div className='social-links'>
       <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-square-instagram"></i>
       <i class="fa-brands fa-youtube"></i>
                   </div>
                         </Col>
                </Row>
    <h6 className='copyright-text'>Copyright © 2024. All Rights Reserved.</h6>
            </div>
            </Container>
        </div>
    </div>
  )
}

export default Footer;