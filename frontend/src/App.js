import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <Outlet/>
      </Container>
    </main>
    
    </>
  )
}

export default App
