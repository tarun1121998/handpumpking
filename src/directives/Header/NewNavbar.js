import React from 'react';
import "./NewNavbar.css";
import Container from 'react-bootstrap/Container';
import {Nav ,Navbar,NavDropdown} from 'react-bootstrap';

const NewNavbar = () => {
  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <h3>
          HANDPUMPKING
          </h3>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/ConsumerComplaint">Consumer Complaint</Nav.Link>

            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/UserLogin">Login</Nav.Link>
            <Nav.Link href="/UserProfile">Profile</Nav.Link>
            


            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mobile App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NewNavbar