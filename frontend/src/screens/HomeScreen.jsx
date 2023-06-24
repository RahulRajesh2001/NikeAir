import React from 'react'
import Product from '../components/Product/Product';
import { Row, Col } from 'react-bootstrap'
import products from '../products'

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
    </>
  )
}

export default HomeScreen
