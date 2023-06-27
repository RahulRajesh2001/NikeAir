import React, { useState ,useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
  },[userInfo,redirect,navigate])

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
        toast.error('Password do not match');
    }else{
        try {
            const res = await register({name,email, password });
            dispatch(setCredentials({ ...res}));
            navigate(redirect);
          } catch (error) {
            console.log(error);
            toast.error('Invalid email or password');
          }
    }
   
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign Up</h1>

          <Form onSubmit={submitHandler}>

          <Form.Group controlId='name' className='my-3'>
              <Form.Label>name Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='email' className='my-3'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='password' className='my-3'>
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='confirmPassword' className='my-3'>
              <Form.Label>Enter Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              type='submit'
              variant='light'
              className='mt-2 text-dark'
              disabled={isLoading}
              style={{ backgroundColor: 'white', border: '1px solid black' }}
            >
              Sign Up
            </Button>
            {isLoading && <h2>Loading...</h2>}
          </Form>

          <Row className='py-3'>
            <Col>
              Already have an account?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterScreen;