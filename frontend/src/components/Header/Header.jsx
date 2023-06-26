import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../Header/header.css'
import { LinkContainer } from 'react-router-bootstrap';
import {useSelector} from 'react-redux';

const Header = () => {
  const {userInfo} = useSelector ((state)=> state.auth);

const logoutHandler=()=>{
console.log("logout")
}

  return (
    <header>
      <Navbar expand='lg' collapseOnSelect className='navbar-white'>
        <Container>
        <LinkContainer to='/'>
  <Navbar.Brand>
    <img src="https://cdn.wallpapersafari.com/98/5/78E3Lg.jpg" alt="Nike Logo" style={{ width: '50px', height: '50px' }} /> 
  </Navbar.Brand>
</LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <LinkContainer to='/dev'>
                <Nav.Link  className='bold-link'>MAN</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dev'>
                <Nav.Link className='bold-link'>WOMEN</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dev'>
                <Nav.Link className='bold-link'>KIDS</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dev'>
                <Nav.Link className='bold-link'>COLLECTIONS</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dev'>
                <Nav.Link className='bold-link'>CONTACT</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='bold-link'>SEARCH</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dev'>
                <Nav.Link className='bold-link'>CART</Nav.Link>
              </LinkContainer>
              {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                 <NavDropdown.Item onClick={logoutHandler}>
                  LOGOUT
                 </NavDropdown.Item>
                </NavDropdown>
              ) : (<LinkContainer to='/login'>
                <Nav.Link>LOGIN</Nav.Link>
              </LinkContainer>)} */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
