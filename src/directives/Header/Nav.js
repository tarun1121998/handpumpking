import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
const Nav = () => {
  const Loginid = localStorage.getItem("userid");

  return (
    <>
      <header class="header">
      <Link to="/"> <h4 class="logo">
          HANDPUMP
        </h4>
        </Link> 
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
          <Link to="/ConsumerComplaint" > Consumer Complaint</Link>
          </li>
          <li>
          <Link to="/Register"> Register</Link>
          </li>
          <li>
            {Loginid ?
            <Link to="/UserProfile">Profile</Link> 
            :<Link to="/userlogin">Login</Link> 
            }
          </li>
       <li className="app-dropdown">  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Mobile App
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="dropdown-list">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
    </li> 
        </ul>
      </header>
    </>
  );
};

export default Nav;
