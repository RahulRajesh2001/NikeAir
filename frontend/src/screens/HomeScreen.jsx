import React from 'react';
import Product from '../components/Product/Product';
import{useGetProductsQuery} from '../slices/productApiSlice';
import { Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'

const HomeScreen = () => {

const {data:products, isLoading,error}=useGetProductsQuery();

  return (
    <>
    <strong>Man Shoes</strong>
    {isLoading ? (<h2>Loading...</h2>) : error ? (<div>{error?.data?.message || error.error}</div>) : (<>
    <Row>
    {products.map((product) => (
      <Col key={product._id} sm={12} md={6} lg={3} xl={2}>
        <Product product={product}/>
      </Col>
    ))}
  </Row>
    </>)}
      
      <Footer/>
    </>
  )
}

export default HomeScreen
