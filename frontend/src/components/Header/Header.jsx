import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../Header/header.css'
import { LinkContainer } from 'react-router-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import SearchBox from '../SearchBox/SearchBox';
import {useLogoutMutation} from '../../slices/usersApiSlice';
import {logout} from '../../slices/authSlice'

const Header = () => {
  const userInfo = useSelector ((state)=> state.auth);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [logoutApiCall]=useLogoutMutation();

const logoutHandler=async()=>{
try{
  await logoutApiCall().unwrap();
  dispatch(logout());
  navigate('/login');
}catch(error){
console.log(error);
}
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
              <LinkContainer to='/login'>
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
            <Nav>
              <SearchBox/>
              <LinkContainer to='/dev'>
                <Nav.Link className='bold-link'>CART</Nav.Link>
              </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/logout'>
                  <NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (  <LinkContainer to='/login'>
              <Nav.Link href='/login'>
                SIGN IN
              </Nav.Link>
            </LinkContainer>)}
            </Nav> 
       
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
