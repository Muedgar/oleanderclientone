import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "./assets/logo.png";

import "./navbar.css";

function NavBar() {
    const [isHomeActive, setIsHomeActive] = useState(false);
    const [isDonationActive, setIsDonationActive] = useState(false);
    const [isStudentLifeActive, setIsStudentLifeActive] = useState(false);

  return (
    <Navbar id="navId" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="pagenavcollapse" />
        <Navbar.Collapse id="pagenavcollapse">
          <Nav className="me-auto">
            <NavDropdown title="Home" id="home" active={isHomeActive?"home":""}
             onClick={() => {
                setIsHomeActive(true);
                setIsDonationActive(false);
                setIsStudentLifeActive(false);
                document.getElementById("programs").classList.remove("active");
                document.getElementById("admissions").classList.remove("active");
                document.getElementById("school").classList.remove("active");
                window.location = "/";
            }}
            >
              <NavDropdown.Item href="/#hero">Who we are</NavDropdown.Item>
              <NavDropdown.Item href="/#classesweteach">Classes We Teach</NavDropdown.Item>
              <NavDropdown.Item href="/#gallery">School Photos</NavDropdown.Item>
              <NavDropdown.Item href="/#teachers">Our Teachers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="programs" href="/programs" onClick={() => {
                setIsHomeActive(false);
                setIsDonationActive(false);
                setIsStudentLifeActive(false);
                document.getElementById("programs").classList.add("active");
            }}>Our programs</Nav.Link>
            <Nav.Link id="admissions" href="/admissionprocess"  onClick={() => {
                setIsHomeActive(false);
                setIsDonationActive(false);
                setIsStudentLifeActive(false);
                document.getElementById("admissions").classList.add("active");
            }}>Admission process</Nav.Link>
            <Nav.Link id="school" className="active" href="#schoolvalue"  onClick={() => {
                setIsHomeActive(false);
                setIsDonationActive(false);
                setIsStudentLifeActive(false);
                document.getElementById("school").classList.add("active");
            }}>School values</Nav.Link>
            <NavDropdown title="Student life" id="studentlife"  active={isStudentLifeActive?"studentlife":""} onClick={() => {
                setIsHomeActive(false);
                setIsDonationActive(false);
                setIsStudentLifeActive(true);
                document.getElementById("programs").classList.remove("active");
                document.getElementById("admissions").classList.remove("active");
                document.getElementById("school").classList.remove("active");
                window.location = "/studentlife";
            }}>
              <NavDropdown.Item href="#studentlife/3.1">Visit us</NavDropdown.Item>
              <NavDropdown.Item href="#studentlife/3.2">News and events</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Donation" id="donation" active={isDonationActive?"donation":""} onClick={() => {
                setIsHomeActive(false);
                setIsDonationActive(true);
                setIsStudentLifeActive(false);
                document.getElementById("programs").classList.remove("active");
                document.getElementById("admissions").classList.remove("active");
                document.getElementById("school").classList.remove("active");
                window.location = "/donation";
            }}>
              <NavDropdown.Item href="#donation/3.1">Parents</NavDropdown.Item>
              <NavDropdown.Item href="#donation/3.2">Guardians</NavDropdown.Item>
              <NavDropdown.Item href="#donation/3.3">Sponsor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;