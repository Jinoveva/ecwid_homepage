import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'boxicons'; // Import Boxicons
import './CustomNavbar.css';

function CustomNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="navbar-container">
      <div className="brand-section">
        {/* Box-icon for Cart */}
        <div className='brand-icon'>
          <box-icon type="solid" name="cart"></box-icon>
        </div>

        {/* Text beside the icon */}
        <div className="brand-text">
          <p className='brand-name'>Ecwid</p>
          <p className='brand-slogan'>by Lightspeed</p>
        </div>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='nav-wrapper'>
          {/* Nav-main on the left */}
          <Nav className='nav-main'>
            <Nav.Link href="#sell">Sell</Nav.Link>
            <Nav.Link href="#market">Market</Nav.Link>
            <Nav.Link href="#manage">Manage</Nav.Link>
          </Nav>

          {/* Nav-secondary on the right */}
          <Nav className='nav-secondary'>
            <Nav.Link href="#learn">Learn</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>

      {/* Button at the far right */}
      <button className='navbarBtn'>Get started for FREE</button>
    </Navbar>
  );
}

export default CustomNavbar;

