import React from 'react'
import './LandingPage.css'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
   <div className='container1'>
    <div className='leftCol'>
<h2 className='nike-shoes-heading'>Nike shoes</h2>
<strong >Air Max</strong>
<h3 className='heading3'>₹19999</h3>
<Button variant="light" className="custom-button">
  <Link to="/home" className="button-link">Explore</Link>
</Button>
    </div>
    <div className='rightCol'>

    </div>
   </div>
    </>
  )
}

export default LandingPage