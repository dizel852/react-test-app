import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => (
  <React.Fragment>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Test app</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  </React.Fragment>
);
