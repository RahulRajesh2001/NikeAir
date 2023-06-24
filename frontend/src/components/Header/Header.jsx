import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import '../Header/header.css';

const Header = () => {
  return (
    <header>
 <Navbar expand="lg" collapseOnSelect className="navbar-white">
  <Container>
    <Navbar.Brand href="/">NIKE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/cart">MAN</Nav.Link>
        <Nav.Link href="/cart">WOMEN</Nav.Link>
        <Nav.Link href="/cart">KIDS</Nav.Link>
        <Nav.Link href="/cart">COLLECTIONS</Nav.Link>
        <Nav.Link href="/cart">CONTACT</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        <Nav.Link href="/cart">SEARCH</Nav.Link>
        <Nav.Link href="/login">CART</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </header>
  )
}

export default Header