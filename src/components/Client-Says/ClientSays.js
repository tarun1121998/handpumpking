import React from 'react';
import "./ClientSays.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clientImg from "../../assets/clientImg.jpg";
import clientImg1 from "../../assets/clientImg1.jpg";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

const ClientSays = () => {
  return (
    <div>
       
        <div className="client-head">
        <h3>What our client says</h3>
        <p>Aliquam lorem ante, dapibus in, viverra quis</p>
      </div>
      <div className='section-padding'>
      <Carousel responsive={responsive}>
        <div>
          <div className="client-box">
           <img src={clientImg} alt='client'/>
           <div className='rating-stars'>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
          </div>
        </div>
        <div>
          {" "}
          <div className="client-box">
          <img src={clientImg1} alt='client'/>
          <div className='rating-stars'>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
          </div>
        </div>

        <div>
          {" "}
          <div className="client-box">
        
           <img src={clientImg} alt='client'/>
           <div className='rating-stars'>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star-half-stroke"></i>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
          </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="client-box">
          <img src={clientImg1} alt='client'/>
          <div className='rating-stars'>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
          </div>
        </div>
     
      </Carousel>
      </div>
    </div>
  )
}

export default ClientSays;