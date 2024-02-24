import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand className="logo" as={Link} to="home" smooth={true}>LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="home" smooth={true} className="NAV">Home</Nav.Link>
          <Nav.Link as={Link} to="skills" smooth={true} className="NAV">Skills</Nav.Link>
          <Nav.Link as={Link} to="projects" smooth={true} className="NAV">Projects</Nav.Link>
        </Nav>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100089384563643&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/amani.abu.shehade?igsh=MTJwMHBxNWt6Y2dvNg== " target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>
        <div className="contact-button">
          <Nav.Link as={Link} to="contect" smooth={true}>Let's Connect</Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;


