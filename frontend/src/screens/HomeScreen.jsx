import React from 'react';
import { useEffect,useState } from 'react';
import Product from '../components/Product/Product';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'

const HomeScreen = () => {
  const[products,setProducts]=useState([]);

  useEffect(()=>{
    const fetchProducts=async()=>{
      const {data}=await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  },[]);

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={3} xl={2}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
      <Footer/>
    </>
  )
}

export default HomeScreen
