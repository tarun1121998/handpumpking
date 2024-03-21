import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import "./ConsumerComplaint.css";
import Footer from "../../directives/Footer/Footer";
import NewNavbar from "../../directives/Header/NewNavbar";

// import { Link } from "react-router-dom";
// import Otp from "../Register/Otp/Otp";

const Home = () => {
  const page_consumer =useNavigate()
  const [issueTypes, setIssueTypes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectService, setSelectService] = useState([]);
  const [issueTypesid, setIssueTypesid] = useState('');
  const [categoryid, setCategoryid] = useState('');
  const [selectServiceid, setSelectServiceid] = useState('');
const [address,setAddress]=useState('')
const [long,setLong]=useState('')
const [Lati,setLati]=useState('')
const [phone,setPhone]=useState('')
const [name,setName]=useState('')
const [notes,setNotes]=useState('')
const [Image,setImage]=useState(null)

const UserId = localStorage.getItem("userid")
  useEffect(() => {
    fetch("https://handpumpking.digiatto.online/api/issue")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          setIssueTypes(data.types);
          console.log("dataid" ,data);
        } else {
          console.error("Error fetching data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });

    // ------------------- Select category --------------- //

    fetch("https://handpumpking.digiatto.online/api/category")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          setCategory(data.types);
        } else {
          console.error("Error fetching category");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });

    // ----------------------- Select Service API ------------------ //
    fetch("https://handpumpking.digiatto.online/api/service")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          setSelectService(data.types);
        } else {
          console.error("Error fetching service");
        }
      })
      .catch((error) => {
        console.error("Error");
      });
  }, []);

 

  
  const YOUR_API_KEY = `AIzaSyDyeucASg8epjdag7y94MK2F7xJoA5P7QQ`;

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const address = await getAddressFromCoordinates(latitude, longitude);
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
          console.log("Address:", address);
          setAddress(address)
          setLong(longitude)
          setLati(latitude)

        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${YOUR_API_KEY}`);
      if (!response.ok) {
        throw new Error("Failed to fetch address from coordinates.");
      }
      const data = await response.json();
      const address = data.results[0].formatted_address;
      return address;
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };


  const ConsumerComplaint = async (e)=>{
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('phone',phone);
      formDataToSend.append('name', name);
      formDataToSend.append('image',Image );
      formDataToSend.append('notes', notes);
      formDataToSend.append('category', categoryid);
      formDataToSend.append('service', selectServiceid);
      formDataToSend.append('issue_type', issueTypesid);
      formDataToSend.append('client',UserId );
      formDataToSend.append('address', address);
      formDataToSend.append('lon', long);
      formDataToSend.append('lat', Lati);
     
  
      const response = await fetch(
        "https://handpumpking.digiatto.online/api/complaint",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
  
  
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      const data = await response.json();
      page_consumer('/')
      console.log("Form data submitted successfully", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handlerissue =(e)=>{
    setIssueTypesid(e.target.value)
  }
  const handlerservise =(e)=>{
    setSelectServiceid(e.target.value)
  }
  const handlercate =(e)=>{
    setCategoryid(e.target.value)
  }
  const Imagehandler = (event)=>{
    setImage(event.target.files[0])
  }

  return (
    <div>
  
  <NewNavbar/>
     
          <div className="complaint-form-head">
            <h2>Submit Your Complaint Online</h2>
            <p>
              {" "}
              An online consumer complaint is what this specific issue is known{" "}
            </p>
            <div className="section-padding">
              <div className="complaint-form-area">
                <div className="contact-form">
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      <form>
                        <Row>
                          <Col lg={12}>
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name :"
                            />
                          </Col>

                          <Col lg={12}>
                            {/* -------------------- Select Services ------------ */}
                            <select>
                              <option value="option1">Select Services</option>
                              {selectService.map((serviceOption) => (
                                <option
                                  key={serviceOption.id}
                                  value={serviceOption.type}
                                >
                                  {serviceOption.type}
                                </option>
                              ))}
                            </select>
                            {/* ---------------- Select Category ------------- */}
                            <select>
                              <option value="option1">Select Category</option>
                              {category.map((categoryOption) => (
                                <option
                                  key={categoryOption.id}
                                  value={categoryOption.name}
                                >
                                  {categoryOption.name}
                                </option>
                              ))}
                            </select>

                          {/* --------------------- Select Issue ------------------ */}
                          <select value={issueTypesid} onChange={handlerissue}>
                            <option >Select Issue</option>

                            {issueTypes.map((issue) => (
                              <option key={issue.id} value={issue.id}>
                                {issue.type}
                              </option>
                            ))}
                          </select>


                          <input
                            type="file"
                            name="file"
                            placeholder="Your Name :"
                            onChange={Imagehandler}
                          />

                          <input
                            type="Number"
                            name="subject"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                          />
                        </Col>


                          <Col lg={12}>
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                            />
                            <textarea
                              name="message"
                              cols="10"
                              rows="3"
                              placeholder="Write Message :"
                            ></textarea>{" "}
                            <input type="submit" />
                          </Col>
                        </Row>
                      </form>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
     
     
      <Footer />
    </div>
  );
};

export default Home;
