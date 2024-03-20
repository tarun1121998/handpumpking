import React, { useState } from "react";
import "./Otp.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OTPInput, { ResendOTP } from "otp-input-react";

const Otp = (props) => {
  const [OTP, setOTP] = useState("");
const [otpVerified, setOtpVerified] = useState(false);

 const otpverified = async (otpCode, formData) => {
  try{
    const response = await fetch("https://handpumpking.digiatto.online/api/user/otp_verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.username,
        email:formData.email,
        password: formData.password,
        phone_number: formData.phone,
        otp: otpCode,
      }),
    });

  if(!response.ok){
    console.log("OTP verified succesfully");
    setOtpVerified(true);
  }else{
    console.error("OTP verification failed");
  }
  }catch(error){
 console.error("Error:", error);
  }
 };

  // ---------------------- Modal For OTP ------------------ //
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Enter OTP Code </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="otp-area">
            <p>Enter The OTP Sent To Your Mobile Number</p>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              secure
            />
            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
          </div>
        </Modal.Body>
        <Modal.Footer>
        {otpverified ? ( 
          <p>Otp Verified succesfully</p>):(
          <Button className="verify-otp-btn" onClick={()=> otpverified(OTP, props.formData)}>
            Verify OTP
          </Button>
          )} 
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// ----------------- OTP Npm Pacakage ---------------- //

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <Otp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Otp;
