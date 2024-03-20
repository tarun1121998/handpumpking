import React from "react";
// import "../assets/css/style.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WelcomeScreen from "../screens/Welcome-Screen/WelcomeScreen";
import ConsumerComplaint from "../screens/Consumer-Complaint/ConsumerComplaint";
import Otp from "../screens/Register/Otp/Otp";
import Register from "../screens/Register/Register";
import RegisterOtp from "../components/RegisterOtp/RegisterOtp";
import UserProfile from "../screens/User-Profile/UserProfile";
import UserLogin from "../screens/User-Login/UserLogin";
import UserLoginOtp from "../screens/User-Login-Otp/UserLoginOtp";
import Panchnama from "../screens/Panchnama/Panchnama";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function NavRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<WelcomeScreen />} />
          <Route path="/ConsumerComplaint" element={<ConsumerComplaint/>}/>
          <Route path="/otp" element={<Otp/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/registerOtp" element={<RegisterOtp/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/userLogin" element={<UserLogin/>}/>
          <Route path="/userLoginOtp" element={<UserLoginOtp/>}/>
          <Route path="/panchnama" element={<Panchnama/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavRoutes;
