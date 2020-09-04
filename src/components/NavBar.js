import React from 'react';
import '../styling/navbar.css';
import HFace from '../images/hFace.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MyNavBar = () => {
    return (
        <Navbar expand="lg" sticky="top">
            <Navbar.Brand href="#home">
                <img src={HFace} alt="Logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-menu">
                <Nav className="menu">
                <Nav.Link href="#home">About Me</Nav.Link>
                <Nav.Link href="#link">Hosted Work</Nav.Link>
                <NavDropdown title="Project Breakdowns" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.4">All Projects</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Personal</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">University</NavDropdown.Item>
                    
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar

