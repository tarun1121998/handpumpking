 import React, { useState } from "react";
 import "./Register.css";
 import Nav from "../../directives/Header/Nav";
 import { Col, Container, Row } from "react-bootstrap";
 import registerImg from "../../assets/registerImg.jpg";
 import Footer from "../../directives/Footer/Footer";
 import Otp from "../Register/Otp/Otp";

 const Register = () => {
   const [showOtp, setShowOtp] = useState(false);


   const [formData, setFormData] = useState({
     username: "",
     email: "",
     password: "",
     phone: "",
     image: null,
   });
   const [submitSuccess, setSubmitSuccess] = useState(false);
   const [saveSuccess, setSaveSuccess] = useState(false);

   const handleInputChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleImageUpload = (e) => {
     const file = e.target.files[0];
     setFormData({ ...formData, image: file });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const formDataToSend = new FormData();
       formDataToSend.append('username', formData.username);
       formDataToSend.append('email', formData.email);
       formDataToSend.append('password', formData.password);
       formDataToSend.append('phone', formData.phone);
       formDataToSend.append('image', formData.image);

       const response = await fetch(
         "https://handpumpking.digiatto.online/api/user/register",
         {
           method: "POST",
           body: formDataToSend,
         }
       );

      
       if (!response.ok) {
         throw new Error("Network response was not ok: " + response.status);
       }   
       const data = await response.json();

       localStorage.setItem("registeredUserData", JSON.stringify(data));

       console.log("Form data submitted successfully", data);
       setSubmitSuccess(true);
       setSaveSuccess(true);

setShowOtp(true);
     } catch (error) {
       console.error("Error:", error);
     }
   };

   return (
     <div>
       <Nav />
       <div className="section-padding">
         <Container>
           <div className="register-area">
             <Row>
               <Col lg={5}>
                 <img src={registerImg} className="register-img" alt="Registration"></img>
               </Col>
               <Col lg={7}>
                 <div className="registration-fields">
                   <h4>Registration Form</h4>
                   <form onSubmit={handleSubmit}>
                     <Row>
                       <Col lg={8}>
                         <input
                           type="text"
                           placeholder="Enter Your Name"
                           name="username" 
                           value={formData.username} 
                           onChange={handleInputChange}
                         ></input>

                         <input
                           type="email"
                           placeholder="Enter Email Address" 
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                         ></input>

                         <input
                           type="password"
                           placeholder="Enter Password"
                           name="password" 
                           value={formData.password}
                           onChange={handleInputChange}
                         ></input>

                       </Col>
                       <Col lg={4}>
                         <label htmlFor="imageUpload" className="img-upload-container">
                           {formData.image ? (
                             <img
                               src={URL.createObjectURL(formData.image)}
                               alt="preview"
                               className="uploaded-image"
                             />
                           ) : (
                             <span>Click to upload image</span>
                           )}
                         </label>
                         <input
                           id="imageUpload"
                           type="file"
                           accept="image/*"
                           name="image"
                           onChange={handleImageUpload}
                           style={{ display: "none" }}
                           className="img-input"
                         />
                       </Col>
                     </Row>
                     <input 
                       type="tel" 
                       placeholder="Enter Phone Number" 
                       name="phone" 
                       value={formData.phone} 
                       onChange={handleInputChange}
                     ></input>
                     <button type="submit" className="continue-btn">Continue</button>
                   </form>
                 
                 </div>
               </Col>
             </Row>
           </div>
         </Container>
       </div>
       <Footer />
       <Otp show={showOtp} onHide={()=> setShowOtp(false)}/>    
     </div>
   );
 };

 export default Register;
