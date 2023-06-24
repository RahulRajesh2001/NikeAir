import React from 'react'
import Product from '../components/Product/Product';
import { Row, Col } from 'react-bootstrap'
import products from '../products';
import Footer from '../components/Footer/Footer'

const HomeScreen = () => {
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
