import React from 'react';
import "./DownloadApp.css";
import { Col, Row } from 'react-bootstrap';
import appImg from "../../assets/appImg.png"
import qrImage from "../../assets/qrImage.jpg"
import googlePlay from "../../assets/googlePlay.png"
import appleStore from "../../assets/appleStore.png"
const DownloadApp = () => {
  return (
    <div>
        <div className='download-box'>
<Row>
    <Col lg={6} md={6}>
    <div className='download-content'>
<h2>Download Our App</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<h5>Scan the QR code to get the app now</h5>
<img src={qrImage} className='qr-img' />
<div className='app-links'>
    <img src={googlePlay} className='google-play'/>
    <img src={appleStore} className='apple-store'/>
</div>
</div>
</Col>
    <Col lg={6} md={6}>
        <div className='app-img'>
        <img src={appImg}/>
        </div>
    </Col>
</Row>
        </div>
    </div>
  )
}

export default DownloadApp;