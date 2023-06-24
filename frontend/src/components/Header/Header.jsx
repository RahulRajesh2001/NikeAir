import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../Header/header.css'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' collapseOnSelect className='navbar-white'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>NIKE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>MAN</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>WOMEN</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>KIDS</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>COLLECTIONS</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link>SEARCH</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>CART</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
